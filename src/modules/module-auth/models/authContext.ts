/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

/** types */
import type { User } from '@firebase/auth';

type AuthStateType = {
    isAuth: boolean;
    me?: User;
};

type AuthContextProps = AuthStateType & {
    toggleAuth(options?: AuthStateType): void;
};

export type { AuthContextProps, AuthStateType };
