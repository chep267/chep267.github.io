/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import * as React from 'react';

/** utils */
import { AuthContext, defaultAuthState } from '@module-auth/hooks/useAuth';

/** types */
import type { PropsWithChildren } from 'react';
import type { AuthContextProps, AuthStateType } from '@module-auth/models';

function AuthProvider(props: PropsWithChildren) {
    const [auth, setAuth] = React.useState<AuthStateType>(defaultAuthState);

    const toggleAuth = React.useCallback((options: AuthStateType = defaultAuthState) => setAuth(options), []);

    const store = React.useMemo<AuthContextProps>(
        () => ({
            ...auth,
            toggleAuth,
        }),
        [auth]
    );

    return <AuthContext.Provider value={store}>{props?.children}</AuthContext.Provider>;
}

export default AuthProvider;
