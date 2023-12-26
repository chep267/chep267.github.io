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
import { accessTokenCookieKey } from '@module-base/constants/localStoreKey';

/** hooks */
import { useAuth } from '@module-auth/hooks/useAuth';

type UseSignOutProps = {
    onSuccess?(): void;
};

export function useSignOut(props: UseSignOutProps) {
    const AUTH = useAuth();

    const SIGN_OUT = useMutation({
        mutationFn: apiSignOut,
        retry: 3,
        onSuccess: () => {
            Cookies.remove(accessTokenCookieKey);
            AUTH.method.setAuth();
            props.onSuccess?.();
        },
    });

    return { isAuth: AUTH.data.isAuth, ...SIGN_OUT };
}
