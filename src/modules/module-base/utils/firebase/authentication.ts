/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

import { getAuth } from 'firebase/auth';
import { firebaseApp } from './firebaseApp';

export const authentication = getAuth(firebaseApp);
