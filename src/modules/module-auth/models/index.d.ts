/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

/** types */
import type { User } from '@firebase/auth';

export * from './apis';

export type FormAuthDataType = {
    email: string;
    password: string;
};

export type AuthContextProps = {
    data: {
        isAuth: boolean;
        me: User;
    };
    method: {
        setAuth(options?: AuthContextProps['data']): void;
    };
};
