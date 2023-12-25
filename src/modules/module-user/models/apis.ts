/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

/** types */
import type { UserInfo } from '@firebase/auth';
import type { TypeCallApiPayloadType, TypeItemIds, TypeItems } from '@module-base/models';

interface UserApiProps {
    Create: {
        Payload: TypeCallApiPayloadType<{ user: UserInfo }>;
        Response?: void;
    };
    Get: {
        Payload: TypeCallApiPayloadType<{ uid: UserInfo['uid'] }>;
        Response?: UserInfo;
    };
    GetList: {
        Payload: TypeCallApiPayloadType<{ limit?: number }>;
        Response?: { itemIds: TypeItemIds; items: TypeItems<UserInfo> };
    };
}

export type { UserApiProps };
