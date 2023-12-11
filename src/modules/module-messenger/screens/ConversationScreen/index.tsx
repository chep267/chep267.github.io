/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import { Stack, Paper } from '@mui/material';

/** components */
import ThreadTitle from '@module-messenger/components/ThreadTitle';
import ThreadContent from '@module-messenger/components/ThreadContent';

/** styles */
import useStyles from './styles';

export default function ConversationScreen() {
    const classes = useStyles();

    return (
        <Stack className={classes.screen}>
            <Paper className={classes.left}>
                <ThreadTitle />
                <ThreadContent />
            </Paper>
            <Paper className={classes.mainContent}>center</Paper>
            <Paper className={classes.right}>
                <ThreadTitle />
                <ThreadContent />
            </Paper>
        </Stack>
    );
}
