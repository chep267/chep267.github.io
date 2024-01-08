/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

import { getFirestore } from 'firebase/firestore';
import { firebaseApp } from './firebaseApp.ts';

export const firestore = getFirestore(firebaseApp);
