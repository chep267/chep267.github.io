/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import * as React from 'react';

/** constants */
import { emptyFunction } from '@module-base/constants/defaulValue';

/** types */
import type { User } from 'firebase/auth';
import type { AuthContextProps } from '@module-auth/models';

const defaultAuthState = Object.freeze({ isAuth: false, me: {} as User });

const AuthContext = React.createContext<AuthContextProps>({
    data: defaultAuthState,
    method: {
        setAuth: emptyFunction,
    },
});
AuthContext.displayName = 'AuthContext';

const useAuth = () => React.useContext(AuthContext);

export { AuthContext, useAuth, defaultAuthState };
