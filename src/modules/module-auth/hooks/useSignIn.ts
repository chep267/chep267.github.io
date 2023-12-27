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
import { accessTokenCookieKey, emailLocalKey } from '@module-base/constants/localStoreKey';

/** utils */
import { Encrypt } from '@module-base/utils/security';
import { localStorageBase } from '@module-base/utils/storages';
import { authMessage } from '@module-auth/utils/messages';

/** hooks */
import { useNotify } from '@module-base/hooks/useNotify';
import { useAuth } from '@module-auth/hooks/useAuth';

export function useSignIn() {
    const AUTH = useAuth();
    const NOTIFY = useNotify();

    return useMutation({
        mutationFn: apiSignIn,
        onSuccess: async (response, { email }) => {
            const me = response.user;
            const accessToken = (await me.getIdToken()) || '';
            localStorageBase.set(emailLocalKey, Encrypt(email));
            Cookies.set(accessTokenCookieKey, accessToken, { expires: 1 });
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
