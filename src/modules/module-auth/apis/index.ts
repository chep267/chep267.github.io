/**
 *
 * @author dong.nguyenthanh@powergatesoftware.com on 26/07/2023.
 *
 */

import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut as signOutFirebase,
    onAuthStateChanged,
    sendPasswordResetEmail,
} from 'firebase/auth';

/** constants */
import { TIMING_API_PENDING } from '@module-base/constants/defaultValue';

/** utils */
import { firebaseApp } from '@module-base/utils/firebase';
import { debounce } from '@module-base/utils/helpers/debounce';

/** types */
import type { AuthApiProps } from '@module-auth/models';

const authentication = getAuth(firebaseApp);

const signInApi = async (payload: AuthApiProps['SignIn']['Payload']): Promise<AuthApiProps['SignIn']['Response']> => {
    const { timer = TIMING_API_PENDING, email, password } = payload;
    const [response] = await Promise.all([signInWithEmailAndPassword(authentication, email, password), debounce(timer)]);
    return response;
};

const signOut = async (payload: AuthApiProps['SignOut']['Payload']): Promise<AuthApiProps['SignOut']['Response']> => {
    const { timer = TIMING_API_PENDING } = payload;
    const [response] = await Promise.all([signOutFirebase(authentication), debounce(timer)]);
    return response;
};

const registerApi = async (payload: AuthApiProps['Register']['Payload']): Promise<AuthApiProps['Register']['Response']> => {
    const { timer = TIMING_API_PENDING, email, password } = payload;
    const [response] = await Promise.all([createUserWithEmailAndPassword(authentication, email, password), debounce(timer)]);
    return response;
};

const recoverApi = async (payload: AuthApiProps['Recover']['Payload']): Promise<AuthApiProps['Recover']['Response']> => {
    const { timer = TIMING_API_PENDING, email } = payload;
    const [response] = await Promise.all([sendPasswordResetEmail(authentication, email), debounce(timer)]);
    return response;
};

export { authentication, signInApi, signOut, registerApi, onAuthStateChanged as restartApi, recoverApi };
