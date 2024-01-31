/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import { collection, doc, onSnapshot, query, setDoc, deleteDoc, getDoc } from 'firebase/firestore';

/** apis */
import { apiCreateMessage } from './apiCreateMessage.ts';

/** constants */
import { firebaseRef, timePendingApi } from '@module-base/constants';
import { ChatBotGPT, MessageGPT } from '@module-messenger/constants';

/** utils */
import { firestore, debounce, checkId } from '@module-base/utils';
import { genMessage } from '@module-messenger/utils';

/** types */
import type { TypeItemIds, TypeItems } from '@module-base/models';
import type { MessengerApiProps, TypeDocumentThreadData } from '@module-messenger/models';

export const apiOnGetListThread = async (
    payload: MessengerApiProps['GetListThread']['Payload']
): Promise<MessengerApiProps['GetListThread']['Response']> => {
    const { timer = timePendingApi, uid, fnCallback } = payload;
    const docRef = collection(firestore, firebaseRef.messenger, uid, `${firebaseRef.thread}-${firebaseRef.info}`);

    const onGet = () => {
        const unsubscribe = onSnapshot(query(docRef), (querySnapshot) => {
            const itemIds: TypeItemIds = [];
            const items: TypeItems<TypeDocumentThreadData> = {};
            querySnapshot.forEach((doc) => {
                const tid = doc.id;
                itemIds.unshift(tid);
                items[tid] = doc.data() as TypeDocumentThreadData;
            });
            if (!itemIds.includes(ChatBotGPT.MESSENGER_CHAT_BOT_AI_ID)) {
                itemIds.unshift(ChatBotGPT.MESSENGER_CHAT_BOT_AI_ID);
                const dataGPT = genMessage({
                    tid: ChatBotGPT.MESSENGER_CHAT_BOT_AI_ID,
                    uid: ChatBotGPT.MESSENGER_CHAT_BOT_AI_ID,
                    text: MessageGPT['start'],
                    mid: ChatBotGPT.MID_GPT_START,
                    isEncrypt: true,
                });
                apiCreateMessage({
                    uid,
                    tid: ChatBotGPT.MESSENGER_CHAT_BOT_AI_ID,
                    mid: dataGPT.mid,
                    data: dataGPT,
                });
                return apiCreateThread({
                    tid: ChatBotGPT.MESSENGER_CHAT_BOT_AI_ID,
                    uid,
                    data: {
                        type: 'thread',
                        tid: ChatBotGPT.MESSENGER_CHAT_BOT_AI_ID,
                        name: 'Chep GPT',
                        members: [uid, checkId(ChatBotGPT.MESSENGER_CHAT_BOT_AI_ID, 'uid')],
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

export const apiCreateThread = async (
    payload: MessengerApiProps['CreateThread']['Payload']
): Promise<MessengerApiProps['CreateThread']['Response']> => {
    const { uid, tid, data } = payload;
    const docRef = doc(firestore, firebaseRef.messenger, uid, `${firebaseRef.thread}-${firebaseRef.info}`, tid);
    return setDoc(docRef, data, { merge: true });
};

export const apiMoveThread = async (
    payload: MessengerApiProps['MoveThread']['Payload']
): Promise<MessengerApiProps['MoveThread']['Response']> => {
    const { uid, tid } = payload;
    const docRef = doc(firestore, firebaseRef.root, firebaseRef.messenger, firebaseRef.user, uid, firebaseRef.thread, tid);
    let thread = {};
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        thread = docSnap.data();
        await deleteDoc(docRef);
    }
    return setDoc(docRef, thread);
};
