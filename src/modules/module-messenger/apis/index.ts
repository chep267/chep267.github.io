/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import { collection, doc, onSnapshot, query, setDoc, limit, deleteDoc, getDoc } from '@firebase/firestore';

/** constants */
import { ROOT_REF } from '@module-base/constants/ref';
import { TIMING_API_PENDING } from '@module-base/constants/defaultValue';
import { MESSENGER_DB_ROOT_REF, MESSENGER_DB_THREAD_ID_REF, MESSENGER_DB_USER_ID_REF } from '@module-messenger/constants/ref';

/** utils */
import { debounce } from '@module-base/utils/helpers/debounce';
import { firestore } from '@module-base/utils/firebase';

/** types */
import type { ItemIdsType, ItemsType } from '@module-base/models';
import type { MessengerApiProps, ThreadDataType } from '@module-messenger/models';

const apiGetListThread = async (
    payload: MessengerApiProps['GetListThread']['Payload']
): Promise<MessengerApiProps['GetListThread']['Response']> => {
    const { timer = TIMING_API_PENDING, uid, fnCallback } = payload;
    const onGetThreadList = () => {
        const docRef = collection(
            firestore,
            ROOT_REF,
            MESSENGER_DB_ROOT_REF,
            MESSENGER_DB_USER_ID_REF,
            uid,
            MESSENGER_DB_THREAD_ID_REF
        );
        const unsubscribe = onSnapshot(query(docRef, limit(20)), (querySnapshot) => {
            const itemIds: ItemIdsType = [];
            const items: ItemsType<ThreadDataType> = {};
            querySnapshot.forEach((doc) => {
                const tid = doc.id;
                itemIds.unshift(tid);
                items[tid] = doc.data() as ThreadDataType;
            });
            fnCallback({ itemIds, items });
        });
        return { unsubscribe };
    };

    const [response] = await Promise.all([onGetThreadList(), debounce(timer)]);
    return response;
};

const apiCreateThread = async (
    payload: MessengerApiProps['CreateThread']['Payload']
): Promise<MessengerApiProps['CreateThread']['Response']> => {
    const { uid, tid, data } = payload;
    const docRef = doc(
        firestore,
        ROOT_REF,
        MESSENGER_DB_ROOT_REF,
        MESSENGER_DB_USER_ID_REF,
        uid,
        MESSENGER_DB_THREAD_ID_REF,
        tid
    );
    let thread = {};
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        thread = docSnap.data();
        await deleteDoc(docRef);
    }
    return setDoc(docRef, { ...thread, ...data });
};

const apiMoveThread = async (
    payload: MessengerApiProps['MoveThread']['Payload']
): Promise<MessengerApiProps['MoveThread']['Response']> => {
    const { uid, tid } = payload;
    const docRef = doc(
        firestore,
        ROOT_REF,
        MESSENGER_DB_ROOT_REF,
        MESSENGER_DB_USER_ID_REF,
        uid,
        MESSENGER_DB_THREAD_ID_REF,
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

export { apiGetListThread, apiCreateThread, apiMoveThread };
