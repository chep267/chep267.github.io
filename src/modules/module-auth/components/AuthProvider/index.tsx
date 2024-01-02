/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import * as React from 'react';

/** utils */
import { checkId } from '@module-base/utils/helpers/checkId';

/** hooks */
import { AuthContext, defaultAuthState } from '@module-auth/hooks/useAuth';

/** types */
import { AuthContextProps, AuthProviderProps } from '@module-auth/models';

export default function AuthProvider(props: AuthProviderProps) {
    const { children } = props;
    const [auth, setAuth] = React.useState<AuthContextProps['data']>(defaultAuthState);

    const changeAuth = React.useCallback<AuthContextProps['method']['setAuth']>(({ isAuth, me } = defaultAuthState) => {
        const user: AuthContextProps['data']['me'] = { ...me, uid: checkId(me.uid, 'uid') };
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
