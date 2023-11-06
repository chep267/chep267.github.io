/**
 *
 * @author dong.nguyenthanh@powergatesoftware.com on 26/07/2023.
 *
 */

/** types */
import type { UserCredential } from '@firebase/auth';
import type { CallApiPayloadType } from '@module-base/models';

interface AuthApiProps {
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
