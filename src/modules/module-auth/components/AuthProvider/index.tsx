/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import * as React from 'react';

/** utils */
import { AuthContext, defaultAuthState } from '@module-auth/hooks/useAuth';
import { checkId } from '@module-base/utils/helpers/checkId';

/** types */
import type { PropsWithChildren } from 'react';
import type { AuthContextProps } from '@module-auth/models';

function AuthProvider(props: PropsWithChildren) {
    const { children } = props;
    const [auth, setAuth] = React.useState<AuthContextProps['data']>(defaultAuthState);

    const changeAuth = React.useCallback<AuthContextProps['method']['setAuth']>(({ isAuth, me } = defaultAuthState) => {
        const user: AuthContextProps['data']['me'] = me ? { ...me, uid: checkId(me.uid, 'uid') } : undefined;
        setAuth({ isAuth, me: user });
    }, []);

    const store = React.useMemo<AuthContextProps>(() => {
        return {
            data: auth,
            method: {
                setAuth: changeAuth,
            },
        };
    }, [auth]);

    return <AuthContext.Provider value={store}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
