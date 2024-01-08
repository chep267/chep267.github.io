/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import Cookies from 'js-cookie';
import { useMutation } from '@tanstack/react-query';

/** apis */
import { apiSignIn } from '@module-auth/apis';

/** constants */
import { accessTokenKey, emailLocalKey } from '@module-base/constants/storeKey';

/** utils */
import { Crypto } from '@module-base/utils/security';
import { localStorageBase } from '@module-base/utils';
import { authMessage } from '@module-auth/utils';

/** hooks */
import { useNotify } from '@module-base/hooks';
import { useAuth } from '@module-auth/hooks';

export function useSignIn() {
    const AUTH = useAuth();
    const NOTIFY = useNotify();

    return useMutation({
        mutationFn: apiSignIn,
        onSuccess: async (response, { email }) => {
            const me = response.user;
            const accessToken = (await me.getIdToken()) || '';
            localStorageBase.set(emailLocalKey, Crypto.encrypt(email));
            Cookies.set(accessTokenKey, accessToken, { expires: 1 });
            AUTH.method.setAuth({ isAuth: true, me });
        },
        onError: () => {
            NOTIFY.method.toggleNotify({
                open: true,
                mode: 'error',
                intlMessage: authMessage['module.auth.form.status.email.incorrect'],
            });
        },
    });
}
