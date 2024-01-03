/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import { collection, doc, onSnapshot, query, setDoc, deleteDoc, getDoc } from 'firebase/firestore';

/** apis */
import { apiCreateMessage } from '@module-messenger/apis/Message';

/** constants */
import { ROOT_REF, TIMING_API_PENDING } from '@module-base/constants';
import {
    MESSENGER_CHAT_BOT_AI_ID,
    MESSENGER_DB_ROOT_REF,
    MESSENGER_DB_THREAD_INFO_REF,
    MESSENGER_DB_THREADS_REF,
    MESSENGER_DB_USERS_REF,
} from '@module-messenger/constants/ref';
import { MessageGPT, MID_GPT_START } from '@module-messenger/constants/chatGPT';

/** utils */
import { firestore, debounce, checkId } from '@module-base/utils';
import { genMessage } from '@module-messenger/utils/helpers/genMessage';

/** types */
import type { TypeItemIds, TypeItems } from '@module-base/models';
import type { MessengerApiProps, TypeDocumentThreadData } from '@module-messenger/models';

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
            const items: TypeItems<TypeDocumentThreadData> = {};
            querySnapshot.forEach((doc) => {
                const tid = doc.id;
                itemIds.unshift(tid);
                items[tid] = doc.data() as TypeDocumentThreadData;
            });
            if (!itemIds.includes(MESSENGER_CHAT_BOT_AI_ID)) {
                itemIds.unshift(MESSENGER_CHAT_BOT_AI_ID);
                const dataGPT = genMessage({
                    tid: MESSENGER_CHAT_BOT_AI_ID,
                    uid: MESSENGER_CHAT_BOT_AI_ID,
                    text: MessageGPT['start'],
                    mid: MID_GPT_START,
                    isEncrypt: true,
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
                        members: [uid, checkId(MESSENGER_CHAT_BOT_AI_ID, 'uid')],
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
