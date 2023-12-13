/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import { useParams } from 'react-router-dom';

/** lib components */
import { Stack, Avatar, Typography } from '@mui/material';
import { Image as ImageIcon } from '@mui/icons-material';

/** hooks */
import { useUser } from '@module-user/hooks/useUser';

/** styles */
import useStyles from './styles';

export default function ThreadInfo() {
    const classes = useStyles();
    const { tid } = useParams();
    const user = useUser({ uid: tid });

    return (
        <Stack className={classes.thread_info}>
            <Avatar alt="avt" className={classes.avatar} src={user?.data?.photoURL || ''}>
                <ImageIcon />
            </Avatar>
            <Typography variant="h6" pt={2}>
                {user?.data?.displayName}
            </Typography>
        </Stack>
    );
}
