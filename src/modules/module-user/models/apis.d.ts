/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

/** types */
import type { UserInfo } from '@firebase/auth';
import type { TypeCallApiPayload, TypeItemIds, TypeItems } from '@module-base/models';

interface UserApiProps {
    Create: {
        Payload: TypeCallApiPayload<{ user: UserInfo }>;
        Response?: void;
    };
    Get: {
        Payload: TypeCallApiPayload<{ uid: UserInfo['uid'] }>;
        Response?: UserInfo;
    };
    GetList: {
        Payload: TypeCallApiPayload<{ limit?: number }>;
        Response?: { itemIds: TypeItemIds; items: TypeItems<UserInfo> };
    };
}

export type { UserApiProps };
