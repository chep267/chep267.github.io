/**
 *
 * @author dong.nguyenthanh@powergatesoftware.com on 26/07/2023.
 *
 */

import Cookies from 'js-cookie';
import { useMutation } from '@tanstack/react-query';
import { useIntl } from 'react-intl';

/** apis */
import { signInApi } from '@module-auth/apis';

/** constants */
import { accessTokenCookieKey, emailLocalKey } from '@module-base/constants/localStoreKey';

/** utils */
import { Encrypt } from '@module-base/utils/security';
import { localStorageBase } from '@module-base/utils/storages';
import { useBase } from '@module-base/hooks/useBase';
import { useAuth } from '@module-auth/hooks/useAuth';
import { authMessage } from '@module-auth/utils/messages';

export function useSignIn() {
    const intl = useIntl();
    const auth = useAuth();
    const { notify } = useBase();

    return useMutation({
        mutationFn: signInApi,
        onSuccess: async (response, { email }) => {
            const me = response.user;
            const accessToken = (await me.getIdToken()) || '';
            localStorageBase.set(emailLocalKey, Encrypt(email));
            Cookies.set(accessTokenCookieKey, accessToken, { expires: 1 });
            auth.toggleAuth({ isAuth: true, me });
        },
        onError: () => {
            notify.toggleNotify({
                open: true,
                mode: 'error',
                message: intl.formatMessage(authMessage[`module.auth.form.status.email.incorrect`]),
            });
        },
    });
}
