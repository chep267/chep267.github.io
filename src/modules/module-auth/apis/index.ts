/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    sendPasswordResetEmail,
} from 'firebase/auth';

/** apis */
import { apiCreateUser, apiGetUser } from '@module-user/apis';

/** constants */
import { timePendingApi } from '@module-base/constants/timer';

/** utils */
import { authentication } from '@module-base/utils/firebase';
import { debounce, checkId } from '@module-base/utils/helpers';

/** types */
import type { AuthApiProps } from '@module-auth/models';

const apiSignIn = async (payload: AuthApiProps['SignIn']['Payload']): Promise<AuthApiProps['SignIn']['Response']> => {
    const { timer = timePendingApi, email, password } = payload;
    const [response] = await Promise.all([signInWithEmailAndPassword(authentication, email, password), debounce(timer)]);
    if (response?.user) {
        const uid = checkId(response.user.uid, 'uid');
        let user = await apiGetUser({ uid, timer: 0 });
        if (!user) {
            user = {
                uid,
                email: response.user.email || email,
                displayName: response.user.displayName || email.slice(0, email.indexOf('@')),
                providerId: response.user.providerId,
                photoURL: response.user.photoURL,
                phoneNumber: response.user.phoneNumber,
            };
            await apiCreateUser({ user });
        }
    }
    return response;
};

const apiSignOut = async (payload: AuthApiProps['SignOut']['Payload']): Promise<AuthApiProps['SignOut']['Response']> => {
    const { timer = timePendingApi } = payload;
    const [response] = await Promise.all([signOut(authentication), debounce(timer)]);
    return response;
};

const apiRegister = async (payload: AuthApiProps['Register']['Payload']): Promise<AuthApiProps['Register']['Response']> => {
    const { timer = timePendingApi, email, password } = payload;
    const [response] = await Promise.all([createUserWithEmailAndPassword(authentication, email, password), debounce(timer)]);
    return response;
};

const apiRecover = async (payload: AuthApiProps['Recover']['Payload']): Promise<AuthApiProps['Recover']['Response']> => {
    const { timer = timePendingApi, email } = payload;
    const [response] = await Promise.all([sendPasswordResetEmail(authentication, email), debounce(timer)]);
    return response;
};

const apiRestart = async (payload: AuthApiProps['Restart']['Payload']): Promise<AuthApiProps['Restart']['Response']> => {
    const { timer = timePendingApi, fnCallback } = payload;
    return onAuthStateChanged(authentication, async (user) => {
        if (user) {
            await debounce(timer);
            fnCallback(user);
        }
    });
};

export { apiSignIn, apiSignOut, apiRegister, apiRestart, apiRecover };
