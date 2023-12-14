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

export default function ThreadName(props: TypographyProps & { tid?: string }) {
    const { tid, ...textProps } = props;
    const user = useUser({ uid: tid });

    return <Typography {...textProps}>{user?.data?.displayName || <Skeleton width={100} />}</Typography>;
}
