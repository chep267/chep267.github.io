/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

import {
    getDatabase,
    ref as dbRef,
    query,
    get,
    onValue,
    onChildChanged,
    onChildAdded,
    onChildRemoved,
    set,
    update,
    remove,
    QueryConstraint,
} from '@firebase/database';

/** utils */
import { firebaseApp } from '@module-base/utils/firebase';

/** models */
import { RealtimeDatabaseApiProps } from '@module-base/models';

const realtimeDB = getDatabase(firebaseApp);

interface payloadPropsWithoutCallBack {
    type?: string;
    path?: string;
    data?: object;
    queryConstraints?: QueryConstraint[];
}

const onSuccess = () => ({ response: true });
const onError = (error: Error) => ({ error });

export const REAL_TIME_DATABASE_GET = async (payload: RealtimeDatabaseApiProps['Get']['Payload']) => {
    const { path, queryConstraints = [] } = payload;
    return get(query(dbRef(realtimeDB, path), ...queryConstraints));
};

export const REAL_TIME_DATABASE_ON_GET = (payload: RealtimeDatabaseApiProps['OnGet']['Payload']) => {
    const { type, path, callback } = payload;
    if (type === 'child-add') return onChildAdded(dbRef(realtimeDB, path), callback);
    if (type === 'child-remove') return onChildRemoved(dbRef(realtimeDB, path), callback);
    if (type === 'child-change') return onChildChanged(dbRef(realtimeDB, path), callback);
    return onValue(dbRef(realtimeDB, path), callback);
};

export const REAL_TIME_DATABASE_SET = async (payload: payloadPropsWithoutCallBack) => {
    const { path, data } = payload;
    return set(dbRef(realtimeDB, path), data).then(onSuccess).catch(onError);
};

export const REAL_TIME_DATABASE_UPDATE = async (payload: Required<payloadPropsWithoutCallBack>) => {
    const { path, data } = payload;
    return update(dbRef(realtimeDB, path), data).then(onSuccess).catch(onError);
};

export const REAL_TIME_DATABASE_REMOVE = async (payload: payloadPropsWithoutCallBack) => {
    const { path } = payload;
    return remove(dbRef(realtimeDB, path)).then(onSuccess).catch(onError);
};
