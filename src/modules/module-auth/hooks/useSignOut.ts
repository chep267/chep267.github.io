/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import Cookies from 'js-cookie';
import { useMutation } from '@tanstack/react-query';

/** apis */
import { apiSignOut } from '@module-auth/apis';

/** constants */
import { accessTokenCookieKey } from '@module-base/constants';

/** hooks */
import { useAuth } from '@module-auth/hooks';

export function useSignOut() {
    const AUTH = useAuth();

    const SIGN_OUT = useMutation({
        mutationFn: apiSignOut,
        retry: 3,
        onSuccess: () => {
            Cookies.remove(accessTokenCookieKey);
            AUTH.method.setAuth();
        },
    });

    return { isAuth: AUTH.data.isAuth, ...SIGN_OUT };
}
