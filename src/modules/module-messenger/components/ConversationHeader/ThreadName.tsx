/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import { useParams } from 'react-router-dom';

/** lib components */
import { Typography } from '@mui/material';

/** hooks */
import { useUser } from '@module-user/hooks/useUser';

/** types */
import type { TypographyProps } from '@mui/material';

export default function ThreadName(props: TypographyProps & { tid?: string }) {
    const { tid: Tid, ...textProps } = props;
    const { tid } = useParams();
    const user = useUser({ uid: Tid || tid });

    return (
        <Typography variant="h5" {...textProps}>
            {user?.data?.displayName}
        </Typography>
    );
}
