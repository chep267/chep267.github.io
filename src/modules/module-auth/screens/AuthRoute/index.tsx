/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import * as React from 'react';
import Cookies from 'js-cookie';
import { useLocation, useNavigate } from 'react-router-dom';

/** apis */
import { apiRestart } from '@module-auth/apis';

/** constants */
import { accessTokenKey } from '@module-base/constants';
import { AccountState, AuthScreenPath } from '@module-auth/constants';

/** hooks */
import { useAuth } from '@module-auth/hooks';

/** types */
import type { PropsWithChildren } from 'react';

/** screens */
const StartScreen = React.lazy(() => import('@module-base/components/StartLoading'));
const SignInScreen = React.lazy(() => import('@module-auth/screens/SignInScreen'));

export default function AuthRoute(props: PropsWithChildren) {
    const { children } = props;
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const AUTH = useAuth();
    const accessToken = Cookies.get(accessTokenKey);

    const accountState = AUTH.data.isAuth ? AccountState.signedIn : accessToken ? AccountState.reSignin : AccountState.signin;

    React.useEffect(() => {
        if (accountState === AccountState.reSignin) {
            /** đã đăng nhập từ trước, lấy phiên đăng nhập */
            apiRestart({
                fnCallback: (me) => AUTH.method.setAuth({ isAuth: true, me }),
            }).then();
        }
        if (accountState === AccountState.signedIn && Object.values(AuthScreenPath).includes(pathname as any)) {
            navigate(AuthScreenPath.home, { replace: true });
        }
    }, [accountState]);

    return (
        <React.Suspense>
            {accountState === AccountState.signedIn ? (
                children
            ) : accountState === AccountState.reSignin ? (
                <StartScreen />
            ) : (
                <SignInScreen />
            )}
        </React.Suspense>
    );
}
