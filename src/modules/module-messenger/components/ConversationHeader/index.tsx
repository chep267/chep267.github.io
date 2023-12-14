/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

/** lib components */
import { Stack, IconButton } from '@mui/material';
import { Call as CallIcon, Videocam as VideoCallIcon } from '@mui/icons-material';

/** components */
import ThreadName from '@module-messenger/components/ConversationHeader/ThreadName';
import IconThreadInfo from '@module-messenger/components/ConversationHeader/IconThreadInfo';

/** styles */
import useStyles from './styles';

export default function ConversationHeader() {
    const classes = useStyles();

    return (
        <Stack className={classes.header}>
            <ThreadName />
            <Stack className={classes.header_right}>
                <IconButton>
                    <CallIcon color="primary" />
                </IconButton>
                <IconButton>
                    <VideoCallIcon color="primary" />
                </IconButton>
                <IconThreadInfo />
            </Stack>
        </Stack>
    );
}
