/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

/** lib components */
import { Avatar, Skeleton } from '@mui/material';

/** components */
import { UserAvatar } from '@module-user/components';

/** utils */
import { checkId } from '@module-base/utils';

/** types */
import type { AvatarProps } from '@mui/material';
import type { UserInfo } from '@module-user/models';

type ThreadAvatarProps = AvatarProps & { tid?: UserInfo['uid'] };

export default function ThreadAvatar(props: ThreadAvatarProps) {
    const { tid, src, ...otherProps } = props;

    if (!src && !tid) {
        return (
            <Skeleton variant="circular">
                <Avatar className={otherProps.className} />
            </Skeleton>
        );
    }

    const uid = checkId(`${tid}`, 'uid');
    return <UserAvatar uid={uid} src={src} {...otherProps} />;
}
