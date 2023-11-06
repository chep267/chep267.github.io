/**
 *
 * @author dong.nguyenthanh@powergatesoftware.com on 26/07/2023.
 *
 */

import * as React from 'react';

/** constants */
import { emptyFunction } from '@module-base/constants/defaultValue';

/** types */
import type { ComponentType } from 'react';
import type { AuthContextProps } from '@module-auth/models';

const defaultAuthState = Object.freeze({ isAuth: false, me: undefined });

const AuthContext = React.createContext<AuthContextProps>({ ...defaultAuthState, toggleAuth: emptyFunction });

const useAuth = () => React.useContext(AuthContext);

function withAuth<Props>(WrappedComponent: ComponentType<Props>) {
    return function EnhancedComponent(props: Props) {
        const language = useAuth();
        return <WrappedComponent {...props} useBase={language} />;
    };
}

AuthContext.displayName = 'AuthContext';
// eslint-disable-next-line react-refresh/only-export-components
export { AuthContext, useAuth, withAuth, defaultAuthState };
