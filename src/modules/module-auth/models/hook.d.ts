/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

/** types */
import type { PropsWithChildren } from 'react';
import type { User } from '@firebase/auth';

export type AuthContextProps = {
    data: {
        isAuth: boolean;
        me: User;
    };
    method: {
        setAuth(options?: AuthContextProps['data']): void;
    };
};

export type AuthProviderProps = PropsWithChildren;
