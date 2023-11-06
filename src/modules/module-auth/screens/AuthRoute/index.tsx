/**
 *
 * @author dong.nguyenthanh@powergatesoftware.com on 26/07/2023.
 *
 */

import * as React from 'react';
import Cookies from 'js-cookie';
import { useLocation, useNavigate } from 'react-router-dom';

/** apis */
import { authentication, restartApi } from '@module-auth/apis';

/** components */
import StartLoading from '@module-base/components/StartLoading';

/** constants */
import { accessTokenCookieKey } from '@module-base/constants/localStoreKey';
import { TIMING_APP_START } from '@module-base/constants/defaultValue';
import { ACCOUNT_STATE } from '@module-auth/constants/accountState';
import { AUTH_SCREEN } from '@module-auth/constants/screen';

/** hooks */
import { useAuth } from '@module-auth/hooks/useAuth';

/** types */
import type { PropsWithChildren } from 'react';

/** screens */
const SignInScreen = React.lazy(() => import('@module-auth/screens/SignInScreen'));

function AuthRoute(props: PropsWithChildren) {
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const auth = useAuth();
    const accessToken = Cookies.get(accessTokenCookieKey);

    const accountState = auth.isAuth
        ? ACCOUNT_STATE.SIGNED_IN
        : accessToken
        ? ACCOUNT_STATE.RE_SIGN_IN
        : ACCOUNT_STATE.SIGN_IN;

    React.useEffect(() => {
        let timeout: NodeJS.Timeout;
        if (accountState === ACCOUNT_STATE.RE_SIGN_IN) {
            /** đã đăng nhập từ trước, lấy phiên đăng nhập */
            restartApi(authentication, (me) => {
                if (me) {
                    timeout = setTimeout(() => {
                        auth.toggleAuth({ isAuth: true, me });
                    }, TIMING_APP_START);
                }
            });
        }
        if (accountState === ACCOUNT_STATE.SIGNED_IN && Object.values(AUTH_SCREEN).includes(pathname as any)) {
            navigate(AUTH_SCREEN.HOME, { replace: true });
        }
        return () => clearTimeout(timeout);
    }, [accountState]);

    switch (accountState) {
        case ACCOUNT_STATE.SIGNED_IN:
            return props?.children;
        case ACCOUNT_STATE.RE_SIGN_IN:
            return <StartLoading />;
        default:
            return <SignInScreen />;
    }
}

export default AuthRoute;
