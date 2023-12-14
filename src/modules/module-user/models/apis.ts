/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

/** types */
import type { UserInfo } from '@firebase/auth';
import type { CallApiPayloadType, TypeItemIds, TypeItems } from '@module-base/models';

interface UserApiProps {
    Create: {
        Payload: CallApiPayloadType<{ user: UserInfo }>;
        Response?: void;
    };
    Get: {
        Payload: CallApiPayloadType<{ uid: UserInfo['uid'] }>;
        Response?: UserInfo;
    };
    GetList: {
        Payload: CallApiPayloadType<{ limit?: number }>;
        Response?: { itemIds: TypeItemIds; items: TypeItems<UserInfo> };
    };
}

export type { UserApiProps };
