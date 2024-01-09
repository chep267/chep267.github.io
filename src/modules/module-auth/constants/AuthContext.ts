/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import * as React from 'react';

/** constants */
import { emptyFunction } from '@module-base/constants';
import { defaultAuthState } from './defaultAuthState.ts';

/** types */
import type { AuthContextProps } from '@module-auth/models';

export const AuthContext = React.createContext<AuthContextProps>({
    data: defaultAuthState,
    method: {
        setAuth: emptyFunction,
    },
});
AuthContext.displayName = 'AuthContext';
