/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

/** types */
import type { User, UserCredential, Unsubscribe } from '@firebase/auth';
import type { TypeCallApiPayload } from '@module-base/models';

interface AuthApiProps {
    Restart: {
        Payload: TypeCallApiPayload<{ fnCallback: (user: User) => void }>;
        Response: Unsubscribe;
    };
    SignIn: {
        Payload: TypeCallApiPayload<{ email: string; password: string }>;
        Response: UserCredential;
    };
    SignOut: {
        Payload: TypeCallApiPayload;
        Response: void;
    };
    Register: {
        Payload: TypeCallApiPayload<{ email: string; password: string }>;
        Response: UserCredential;
    };
    Recover: {
        Payload: TypeCallApiPayload<{ email: string }>;
        Response: void;
    };
}

export type { AuthApiProps };
