/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import { collection, doc, onSnapshot, query, setDoc } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';

/** constants */
import { TIMING_API_PENDING } from '@module-base/constants';
import { MESSENGER_DB_MESSAGE_REF, MESSENGER_DB_ROOT_REF, MESSENGER_DB_THREADS_REF } from '@module-messenger/constants';

/** utils */
import { firestore, storage, debounce } from '@module-base/utils';

/** types */
import type { MessengerApiProps, TypeDocumentMessageData } from '@module-messenger/models';
import type { TypeItemIds, TypeItems } from '@module-base/models';

const apiOnGetListMessage = async (
    payload: MessengerApiProps['GetListMessage']['Payload']
): Promise<MessengerApiProps['GetListMessage']['Response']> => {
    const { timer = TIMING_API_PENDING, uid, tid, fnCallback } = payload;
    const docRef = collection(
        firestore,
        MESSENGER_DB_ROOT_REF,
        uid,
        `${MESSENGER_DB_THREADS_REF}-${MESSENGER_DB_MESSAGE_REF}`,
        tid,
        MESSENGER_DB_MESSAGE_REF
    );

    const onGet = () => {
        const unsubscribe = onSnapshot(query(docRef), (querySnapshot) => {
            const itemIds: TypeItemIds = [];
            const items: TypeItems<TypeDocumentMessageData> = {};
            querySnapshot.forEach((doc) => {
                const tid = doc.id;
                itemIds.push(tid);
                items[tid] = doc.data() as TypeDocumentMessageData;
            });
            fnCallback({ itemIds, items });
        });
        return { unsubscribe };
    };

    const [response] = await Promise.all([onGet(), debounce(timer)]);
    return response;
};

const apiCreateMessage = async (
    payload: MessengerApiProps['CreateMessage']['Payload']
): Promise<MessengerApiProps['CreateMessage']['Response']> => {
    const { uid, tid, mid, data } = payload;
    const docRef = doc(
        firestore,
        MESSENGER_DB_ROOT_REF,
        uid,
        `${MESSENGER_DB_THREADS_REF}-${MESSENGER_DB_MESSAGE_REF}`,
        tid,
        MESSENGER_DB_MESSAGE_REF,
        mid
    );
    await setDoc(docRef, data, { merge: true });
    return { message: data };
};

const apiSendFile = async (
    payload: MessengerApiProps['SendFile']['Payload']
): Promise<MessengerApiProps['SendFile']['Response']> => {
    const { tid, mid, fid, file } = payload;
    const storageRef = ref(
        storage,
        `${MESSENGER_DB_ROOT_REF}/${MESSENGER_DB_THREADS_REF}/${tid}/${MESSENGER_DB_MESSAGE_REF}/${mid}/${fid}`
    );
    const snapshot = await uploadBytes(storageRef, file.fileData as File);
    const url = await getDownloadURL(snapshot.ref);
    return { fid, url };
};

export { apiCreateMessage, apiOnGetListMessage, apiSendFile };
