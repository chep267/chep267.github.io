/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

/** types */
import type { User, UserCredential, Unsubscribe } from '@firebase/auth';
import type { CallApiPayloadType } from '@module-base/models';

interface AuthApiProps {
    Restart: {
        Payload: CallApiPayloadType<{ fnCallback: (user: User) => void }>;
        Response: Unsubscribe;
    };
    SignIn: {
        Payload: CallApiPayloadType<{ email: string; password: string }>;
        Response: UserCredential;
    };
    SignOut: {
        Payload: CallApiPayloadType;
        Response: void;
    };
    Register: {
        Payload: CallApiPayloadType<{ email: string; password: string }>;
        Response: UserCredential;
    };
    Recover: {
        Payload: CallApiPayloadType<{ email: string }>;
        Response: void;
    };
}

export type { AuthApiProps };
