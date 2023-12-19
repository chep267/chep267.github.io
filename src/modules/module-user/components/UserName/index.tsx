/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

/** lib components */
import { Skeleton, Typography } from '@mui/material';

/** hooks */
import { useUser } from '@module-user/hooks/useUser';

/** types */
import type { TypographyProps } from '@mui/material';
import type { UserInfo } from '@firebase/auth';

type UserNameProps = TypographyProps & { uid?: UserInfo['uid']; name?: UserInfo['displayName'] };

function UserNameGet(props: Omit<UserNameProps, 'name'>) {
    const { uid, ...textProps } = props;
    const user = useUser({ uid });

    return <Typography {...textProps}>{user?.data?.displayName || <Skeleton width={100} />}</Typography>;
}

export default function UserName(props: UserNameProps) {
    const { uid, name, ...textProps } = props;

    if (name) {
        return <Typography {...textProps}>{name}</Typography>;
    }
    return <UserNameGet uid={uid} {...textProps} />;
}
