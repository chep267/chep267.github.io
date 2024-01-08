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
import { accessTokenKey } from '@module-base/constants/storeKey';
import { ACCOUNT_STATE, AUTH_SCREEN } from '@module-auth/constants';

/** hooks */
import { useAuth } from '@module-auth/hooks';

/** types */
import type { PropsWithChildren } from 'react';

/** screens */
const StartScreen = React.lazy(() => import('@module-base/components/StartLoading'));
const SignInScreen = React.lazy(() => import('@module-auth/screens/SignInScreen'));

function AuthRoute(props: PropsWithChildren) {
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const AUTH = useAuth();
    const accessToken = Cookies.get(accessTokenKey);

    const accountState = AUTH.data.isAuth
        ? ACCOUNT_STATE.SIGNED_IN
        : accessToken
          ? ACCOUNT_STATE.RE_SIGN_IN
          : ACCOUNT_STATE.SIGN_IN;

    React.useEffect(() => {
        if (accountState === ACCOUNT_STATE.RE_SIGN_IN) {
            /** đã đăng nhập từ trước, lấy phiên đăng nhập */
            apiRestart({
                fnCallback: (me) => AUTH.method.setAuth({ isAuth: true, me }),
            }).then();
        }
        if (accountState === ACCOUNT_STATE.SIGNED_IN && Object.values(AUTH_SCREEN).includes(pathname as any)) {
            navigate(AUTH_SCREEN.HOME, { replace: true });
        }
    }, [accountState]);

    switch (accountState) {
        case ACCOUNT_STATE.SIGNED_IN:
            return props?.children;
        case ACCOUNT_STATE.RE_SIGN_IN:
            return <StartScreen />;
        default:
            return <SignInScreen />;
    }
}

export default AuthRoute;
