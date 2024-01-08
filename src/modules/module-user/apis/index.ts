/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import { collection, doc, getDoc, getDocs, limit, query, setDoc } from 'firebase/firestore';

/** constants */
import { timePendingApi } from '@module-base/constants/timer';
import { USER_DB_ROOT_REF } from '@module-user/constants';

/** utils */
import { debounce } from '@module-base/utils/helpers';
import { firestore } from '@module-base/utils/firebase';

/** types */
import type { TypeItemIds, TypeItems } from '@module-base/models';
import type { UserApiProps, UserInfo } from '@module-user/models';

const apiCreateUser = async (payload: UserApiProps['Create']['Payload']): Promise<UserApiProps['Create']['Response']> => {
    const { timer = timePendingApi, user } = payload;
    const docRef = doc(firestore, USER_DB_ROOT_REF, user.uid);
    const create = () => setDoc(docRef, user, { merge: true });
    await Promise.all([create(), debounce(timer)]);
};

const apiGetUser = async (payload: UserApiProps['Get']['Payload']): Promise<UserApiProps['Get']['Response']> => {
    const { timer = timePendingApi, uid } = payload;
    const docRef = doc(firestore, USER_DB_ROOT_REF, uid);
    const [response] = await Promise.all([getDoc(docRef), debounce(timer)]);
    return response.exists() ? (response.data() as UserInfo) : undefined;
};

const apiGetListUser = async (payload: UserApiProps['GetList']['Payload']): Promise<UserApiProps['GetList']['Response']> => {
    const { timer = timePendingApi, limit: _limit = 20 } = payload;

    const getListUser = async () => {
        const docRef = collection(firestore, USER_DB_ROOT_REF);
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

export { apiCreateUser, apiGetUser, apiGetListUser };
