/**
 *
 * @author dong.nguyenthanh@powergatesoftware.com on 26/07/2023.
 *
 */

import { useMutation } from '@tanstack/react-query';
import Cookies from 'js-cookie';

/** apis */
import { signOut } from '@module-auth/apis';

/** constants */
import { accessTokenCookieKey } from '@module-base/constants/localStoreKey';

/** utils */
import { useAuth } from '@module-auth/hooks/useAuth';

export function useSignOut() {
    const auth = useAuth();

    const SIGN_OUT = useMutation({
        mutationFn: signOut,
        retry: 3,
        onSuccess: () => {
            Cookies.remove(accessTokenCookieKey);
            auth.toggleAuth();
        },
    });

    return { isAuth: auth.isAuth, ...SIGN_OUT };
}
