/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

/** utils */
import { checkUid } from '@module-user/utils/helpers/checkUid';

/** hooks */
import { useListUser } from '@module-user/hooks/useListUser';

/** types */
import { UserInfo } from '@firebase/auth';

type UseUserProps = {
    uid?: UserInfo['uid'];
};

export function useUser(props: UseUserProps) {
    const { uid: Uid } = props;
    const uid = checkUid(Uid);
    const LIST_USER = useListUser();

    return {
        isLoading: LIST_USER.isLoading,
        data: LIST_USER.data?.items?.[`${uid}`],
    };
}
