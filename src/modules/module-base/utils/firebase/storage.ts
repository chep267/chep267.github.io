/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

import { getStorage } from 'firebase/storage';
import { firebaseApp } from './firebaseApp';

export const storage = getStorage(firebaseApp);
