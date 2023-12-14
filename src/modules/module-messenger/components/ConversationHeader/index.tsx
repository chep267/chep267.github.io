/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

/** lib components */
import { Stack, IconButton } from '@mui/material';
import { Call as CallIcon, Videocam as VideoCallIcon } from '@mui/icons-material';

/** components */
import ConversationName from './ConversationName';
import IconThreadInfo from './IconThreadInfo';

/** styles */
import useStyles from './styles';

export default function ConversationHeader() {
    const classes = useStyles();

    return (
        <Stack className={classes.header}>
            <ConversationName />
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
