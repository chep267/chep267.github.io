/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import { collection, doc, limit, onSnapshot, query, setDoc } from '@firebase/firestore';

/** constants */
import { TIMING_API_PENDING } from '@module-base/constants/defaultValue';
import { MESSENGER_DB_MESSAGE_REF, MESSENGER_DB_ROOT_REF, MESSENGER_DB_THREADS_REF } from '@module-messenger/constants/ref';

/** utils */
import { firestore } from '@module-base/utils/firebase';
import { debounce } from '@module-base/utils/helpers/debounce';

/** types */
import type { MessengerApiProps, TypeMessage } from '@module-messenger/models';
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
        const unsubscribe = onSnapshot(query(docRef, limit(20)), (querySnapshot) => {
            const itemIds: TypeItemIds = [];
            const items: TypeItems<TypeMessage> = {};
            querySnapshot.forEach((doc) => {
                const tid = doc.id;
                itemIds.push(tid);
                items[tid] = doc.data() as TypeMessage;
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
    return setDoc(docRef, data, { merge: true });
};

export { apiCreateMessage, apiOnGetListMessage };
