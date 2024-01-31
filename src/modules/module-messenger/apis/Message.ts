/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import { collection, doc, onSnapshot, query, setDoc } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';

/** constants */
import { timePendingApi, firebaseRef } from '@module-base/constants';

/** utils */
import { firestore, storage, debounce } from '@module-base/utils';

/** types */
import type { MessengerApiProps, TypeDocumentMessageData } from '@module-messenger/models';
import type { TypeItemIds, TypeItems } from '@module-base/models';

export const apiOnGetListMessage = async (
    payload: MessengerApiProps['GetListMessage']['Payload']
): Promise<MessengerApiProps['GetListMessage']['Response']> => {
    const { timer = timePendingApi, uid, tid, fnCallback } = payload;
    const docRef = collection(
        firestore,
        firebaseRef.messenger,
        uid,
        `${firebaseRef.thread}-${firebaseRef.message}`,
        tid,
        firebaseRef.message
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

export const apiCreateMessage = async (
    payload: MessengerApiProps['CreateMessage']['Payload']
): Promise<MessengerApiProps['CreateMessage']['Response']> => {
    const { uid, tid, mid, data } = payload;
    const docRef = doc(
        firestore,
        firebaseRef.messenger,
        uid,
        `${firebaseRef.thread}-${firebaseRef.message}`,
        tid,
        firebaseRef.message,
        mid
    );
    await setDoc(docRef, data, { merge: true });
    return { message: data };
};

export const apiSendFile = async (
    payload: MessengerApiProps['SendFile']['Payload']
): Promise<MessengerApiProps['SendFile']['Response']> => {
    const { tid, mid, fid, file } = payload;
    const storageRef = ref(
        storage,
        `${firebaseRef.messenger}/${firebaseRef.thread}/${tid}/${firebaseRef.message}/${mid}/${fid}`
    );
    const snapshot = await uploadBytes(storageRef, file.fileData as File);
    const url = await getDownloadURL(snapshot.ref);
    return { fid, url };
};
