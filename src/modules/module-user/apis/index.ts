/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import { collection, doc, getDoc, getDocs, limit, query, setDoc } from '@firebase/firestore';

/** constants */
import { TIMING_API_PENDING } from '@module-base/constants/defaultValue';
import { ROOT_REF } from '@module-base/constants/ref';
import { USER_DB_ROOT_REF, USER_DB_USER_ID_REF } from '@module-user/constants/ref';

/** utils */
import { firestore } from '@module-base/utils/firebase';
import { debounce } from '@module-base/utils/helpers/debounce';

/** types */
import type { UserInfo } from '@firebase/auth';
import type { UserApiProps } from '@module-user/models';
import type { TypeItemIds, TypeItems } from '@module-base/models';

const apiCreateUser = async (payload: UserApiProps['Create']['Payload']): Promise<UserApiProps['Create']['Response']> => {
    const { timer = TIMING_API_PENDING, user } = payload;
    const setThread = () => {
        const docRef = doc(firestore, ROOT_REF, USER_DB_ROOT_REF, USER_DB_USER_ID_REF, user.uid);
        return setDoc(docRef, user, { merge: true });
    };
    await Promise.all([setThread(), debounce(timer)]);
};

const apiGetUser = async (payload: UserApiProps['Get']['Payload']): Promise<UserApiProps['Get']['Response']> => {
    const { timer = TIMING_API_PENDING, uid } = payload;
    const docRef = doc(firestore, ROOT_REF, USER_DB_ROOT_REF, USER_DB_USER_ID_REF, uid);
    const [response] = await Promise.all([getDoc(docRef), debounce(timer)]);

    console.log('apiGetUser');
    return response.exists() ? (response.data() as UserInfo) : undefined;
};

const apiGetListUser = async (payload: UserApiProps['GetList']['Payload']): Promise<UserApiProps['GetList']['Response']> => {
    const { timer = TIMING_API_PENDING, limit: _limit = 20 } = payload;
    const getListUser = async () => {
        const docRef = collection(firestore, ROOT_REF, USER_DB_ROOT_REF, USER_DB_USER_ID_REF);

        const querySnapshot = await getDocs(query(docRef, limit(_limit)));

        const itemIds: TypeItemIds = [];
        const items: TypeItems<UserInfo> = {};
        querySnapshot.forEach((doc) => {
            const uid = doc.id;
            itemIds.unshift(uid);
            items[uid] = doc.data() as UserInfo;
        });
        return { itemIds, items };
    };
    const [response] = await Promise.all([getListUser(), debounce(timer)]);
    return response;
};

export { apiCreateUser, apiGetUser, apiGetListUser };
