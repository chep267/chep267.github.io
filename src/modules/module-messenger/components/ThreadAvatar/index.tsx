/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

/** lib components */
import { Avatar, Skeleton } from '@mui/material';

/** hooks */
import { useUser } from '@module-user/hooks/useUser';

/** types */
import type { AvatarProps } from '@mui/material';

export default function ThreadAvatar(props: AvatarProps & { tid?: string }) {
    const { tid, ...otherProps } = props;
    const user = useUser({ uid: tid });
    const src = user?.data?.displayName || undefined;

    if (!src) {
        return <Skeleton variant="circular" className={otherProps.className} />;
    }
    return <Avatar alt="avt" src={src} {...otherProps} />;
}
