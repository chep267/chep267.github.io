/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

/** types */
import type { User, UserCredential, Unsubscribe } from '@firebase/auth';
import type { TypeCallApiPayloadType } from '@module-base/models';

interface AuthApiProps {
    Restart: {
        Payload: TypeCallApiPayloadType<{ fnCallback: (user: User) => void }>;
        Response: Unsubscribe;
    };
    SignIn: {
        Payload: TypeCallApiPayloadType<{ email: string; password: string }>;
        Response: UserCredential;
    };
    SignOut: {
        Payload: TypeCallApiPayloadType;
        Response: void;
    };
    Register: {
        Payload: TypeCallApiPayloadType<{ email: string; password: string }>;
        Response: UserCredential;
    };
    Recover: {
        Payload: TypeCallApiPayloadType<{ email: string }>;
        Response: void;
    };
}

export type { AuthApiProps };
