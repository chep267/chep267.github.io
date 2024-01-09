/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import { collection, doc, getDoc, getDocs, limit, query, setDoc } from 'firebase/firestore';

/** constants */
import { timePendingApi, firebaseRef } from '@module-base/constants';

/** utils */
import { firestore, debounce } from '@module-base/utils';

/** types */
import type { TypeItemIds, TypeItems } from '@module-base/models';
import type { UserApiProps, UserInfo } from '@module-user/models';

export const apiCreateUser = async (
    payload: UserApiProps['Create']['Payload']
): Promise<UserApiProps['Create']['Response']> => {
    const { timer = timePendingApi, user } = payload;
    const docRef = doc(firestore, firebaseRef.user, user.uid);
    const create = () => setDoc(docRef, user, { merge: true });
    await Promise.all([create(), debounce(timer)]);
};

export const apiGetUser = async (payload: UserApiProps['Get']['Payload']): Promise<UserApiProps['Get']['Response']> => {
    const { timer = timePendingApi, uid } = payload;
    const docRef = doc(firestore, firebaseRef.user, uid);
    const [response] = await Promise.all([getDoc(docRef), debounce(timer)]);
    return response.exists() ? (response.data() as UserInfo) : undefined;
};

export const apiGetListUser = async (
    payload: UserApiProps['GetList']['Payload']
): Promise<UserApiProps['GetList']['Response']> => {
    const { timer = timePendingApi, limit: _limit = 20 } = payload;

    const getListUser = async () => {
        const docRef = collection(firestore, firebaseRef.user);
        const querySnapshot = await getDocs(query(docRef, limit(_limit)));
        const itemIds: TypeItemIds = [];
        const items: TypeItems<UserInfo> = {};
        querySnapshot.forEach((doc) => {
            const uid = doc.id;
            itemIds.push(uid);
            items[uid] = doc.data() as UserInfo;
        });
        return { itemIds, items };
    };
    const [response] = await Promise.all([getListUser(), debounce(timer)]);
    return response;
};
