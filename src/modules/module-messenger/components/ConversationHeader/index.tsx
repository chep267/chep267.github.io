/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import { useParams } from 'react-router-dom';

/** lib components */
import { Typography, Stack, IconButton } from '@mui/material';
import { Info as InfoIcon, Call as CallIcon, Videocam as VideoCallIcon } from '@mui/icons-material';

/** hooks */
import { useBase } from '@module-base/hooks/useBase';
import { useUser } from '@module-user/hooks/useUser';

/** styles */
import useStyles from './styles';

export default function ConversationHeader() {
    const classes = useStyles();
    const { tid } = useParams();
    const user = useUser({ uid: tid });

    const { messenger } = useBase();

    return (
        <Stack className={classes.header}>
            <Typography variant="h5">{user?.data?.displayName}</Typography>
            <Stack className={classes.header_right}>
                <IconButton>
                    <CallIcon color="primary" />
                </IconButton>
                <IconButton>
                    <VideoCallIcon color="primary" />
                </IconButton>
                <IconButton onClick={() => messenger.toggleThreadInfo((prev) => !prev)}>
                    <InfoIcon color="primary" />
                </IconButton>
            </Stack>
        </Stack>
    );
}
