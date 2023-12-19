/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

/** lib components */
import { Skeleton, Typography } from '@mui/material';

/** components */
import UserName from '@module-user/components/UserName';

/** utils */
import { checkUid } from '@module-user/utils/helpers/checkUid';

/** types */
import type { TypographyProps } from '@mui/material';
import type { UserInfo } from '@firebase/auth';

type ThreadNameProps = TypographyProps & { tid?: UserInfo['uid']; name?: UserInfo['displayName'] };

export default function ThreadName(props: ThreadNameProps) {
    const { tid, name, ...otherProps } = props;

    if (!name && !tid) {
        return (
            <Typography {...otherProps}>
                <Skeleton width={100} />
            </Typography>
        );
    }

    const uid = checkUid(tid);
    return <UserName uid={uid} name={name} {...otherProps} />;
}
