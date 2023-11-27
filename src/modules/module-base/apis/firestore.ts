/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

import { getFirestore, collection, doc, setDoc, getDoc, query, onSnapshot, getDocs } from '@firebase/firestore';

/** utils */
import { firebaseApp } from '@module-base/utils/firebase';

/** models */
import type { FirestoreApiProps } from '@module-base/models';

const firestore = getFirestore(firebaseApp);

const apiGetFirestore = async (
    payload: FirestoreApiProps['Get']['Payload']
): Promise<FirestoreApiProps['Get']['Response']> => {
    // const { path } = payload;
    // const docRef = doc(firestore, 'cities', 'SF');
};

const apiOnGetFirestore = (payload: FirestoreApiProps['OnGet']['Payload']): FirestoreApiProps['OnGet']['Response'] => {
    const { path, pathSegments, fnCallback } = payload;

    const docSnap = getDocs(collection(firestore, path, ...pathSegments)).then((docSnap) => {
        docSnap?.forEach((doc) => {
            console.log(`docSnap ${doc.id} => ${doc.data()}`);
        });
    });

    const unsubscribe = onSnapshot(query(collection(firestore, path, ...pathSegments)), (querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(`querySnapshot ${doc.id} => ${doc.data()}`);
        });
    });

    return { unsubscribe };
};

const apiSetFirestore = async (
    payload: FirestoreApiProps['Set']['Payload']
): Promise<FirestoreApiProps['Set']['Response']> => {
    const { path, pathSegments, data } = payload;
    return setDoc(doc(firestore, path, ...pathSegments), data);
};

export { apiOnGetFirestore, apiSetFirestore };
