/**
 *
 * @author dong.nguyenthanh@powergatesoftware.com on 26/07/2023.
 *
 */

import Cookies from 'js-cookie';
import { useMutation } from '@tanstack/react-query';

/** apis */
import { apiSignOut } from '@module-auth/apis';

/** constants */
import { accessTokenCookieKey } from '@module-base/constants/localStoreKey';

/** hooks */
import { useAuth } from '@module-auth/hooks/useAuth';

export function useSignOut() {
    const auth = useAuth();

    const SIGN_OUT = useMutation({
        mutationFn: apiSignOut,
        retry: 3,
        onSuccess: () => {
            Cookies.remove(accessTokenCookieKey);
            auth.toggleAuth();
        },
    });

    return { isAuth: auth.isAuth, ...SIGN_OUT };
}
