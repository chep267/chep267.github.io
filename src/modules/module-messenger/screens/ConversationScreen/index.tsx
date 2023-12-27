/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

/** lib components */
import { Stack } from '@mui/material';

/** components */
import ConversationLeft from './ConversationLeft';
import ConversationCenter from './ConversationCenter';
import ConversationRight from './ConversationRight';

/** styles */
import useStyles from './styles';

export default function ConversationScreen() {
    const classes = useStyles();

    return (
        <Stack className={classes.screen}>
            <ConversationLeft />
            <ConversationCenter />
            <ConversationRight />
        </Stack>
    );
}
