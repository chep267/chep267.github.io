/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import { collection, doc, onSnapshot, query, setDoc, deleteDoc, getDoc } from '@firebase/firestore';

/** constants */
import { ROOT_REF } from '@module-base/constants/ref';
import { TIMING_API_PENDING } from '@module-base/constants/defaultValue';
import {
    MESSENGER_CHAT_BOT_AI_ID,
    MESSENGER_DB_ROOT_REF,
    MESSENGER_DB_THREAD_INFO_REF,
    MESSENGER_DB_THREADS_REF,
    MESSENGER_DB_USERS_REF,
} from '@module-messenger/constants/ref';

/** utils */
import { debounce } from '@module-base/utils/helpers/debounce';
import { firestore } from '@module-base/utils/firebase';
import { checkUid } from '@module-user/utils/helpers/checkUid';

/** types */
import type { TypeItemIds, TypeItems } from '@module-base/models';
import type { MessengerApiProps, TypeThreadData } from '@module-messenger/models';
import { genMessage } from '@module-messenger/utils/helpers/genMessage';
import { apiCreateMessage } from '@module-messenger/apis/Message';
import { MessageGPT } from '@module-messenger/constants/chatGPT';

let checkGPT = false;
const apiOnGetListThread = async (
    payload: MessengerApiProps['GetListThread']['Payload']
): Promise<MessengerApiProps['GetListThread']['Response']> => {
    const { timer = TIMING_API_PENDING, uid, fnCallback } = payload;
    const docRef = collection(
        firestore,
        MESSENGER_DB_ROOT_REF,
        uid,
        `${MESSENGER_DB_THREADS_REF}-${MESSENGER_DB_THREAD_INFO_REF}`
    );

    const onGet = () => {
        const unsubscribe = onSnapshot(query(docRef), (querySnapshot) => {
            const itemIds: TypeItemIds = [];
            const items: TypeItems<TypeThreadData> = {};
            querySnapshot.forEach((doc) => {
                const tid = doc.id;
                itemIds.unshift(tid);
                items[tid] = doc.data() as TypeThreadData;
            });
            const posChatBot = itemIds.indexOf(MESSENGER_CHAT_BOT_AI_ID);
            if (posChatBot > -1) {
                itemIds.splice(posChatBot, 1);
                itemIds.unshift(MESSENGER_CHAT_BOT_AI_ID);
            } else if (!checkGPT) {
                checkGPT = true;
                const dataGPT = genMessage({
                    tid: MESSENGER_CHAT_BOT_AI_ID,
                    uid: MESSENGER_CHAT_BOT_AI_ID,
                    text: MessageGPT['start'],
                });
                apiCreateMessage({
                    uid,
                    tid: MESSENGER_CHAT_BOT_AI_ID,
                    mid: dataGPT.mid,
                    data: dataGPT,
                });
                return apiCreateThread({
                    tid: MESSENGER_CHAT_BOT_AI_ID,
                    uid,
                    data: {
                        type: 'thread',
                        tid: MESSENGER_CHAT_BOT_AI_ID,
                        name: 'Chep GPT',
                        members: [uid, checkUid(MESSENGER_CHAT_BOT_AI_ID)],
                    },
                });
            }
            fnCallback({ itemIds, items });
        });
        return { unsubscribe };
    };
    const [response] = await Promise.all([onGet(), debounce(timer)]);
    return response;
};

const apiCreateThread = async (
    payload: MessengerApiProps['CreateThread']['Payload']
): Promise<MessengerApiProps['CreateThread']['Response']> => {
    const { uid, tid, data } = payload;
    const docRef = doc(
        firestore,
        MESSENGER_DB_ROOT_REF,
        uid,
        `${MESSENGER_DB_THREADS_REF}-${MESSENGER_DB_THREAD_INFO_REF}`,
        tid
    );
    return setDoc(docRef, data, { merge: true });
};

const apiMoveThread = async (
    payload: MessengerApiProps['MoveThread']['Payload']
): Promise<MessengerApiProps['MoveThread']['Response']> => {
    const { uid, tid } = payload;
    const docRef = doc(
        firestore,
        ROOT_REF,
        MESSENGER_DB_ROOT_REF,
        MESSENGER_DB_USERS_REF,
        uid,
        MESSENGER_DB_THREADS_REF,
        tid
    );
    let thread = {};
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        thread = docSnap.data();
        await deleteDoc(docRef);
    }
    return setDoc(docRef, thread);
};

export { apiOnGetListThread, apiCreateThread, apiMoveThread };
