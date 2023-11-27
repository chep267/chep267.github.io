/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import { Stack, Paper } from '@mui/material';

/** components */
import ConversationLeft from './ConversationLeft';

/** styles */
import useStyles from './styles';

export default function ConversationScreen() {
    const classes = useStyles();

    return (
        <Stack className={classes.screen}>
            <ConversationLeft />
            <Paper className={classes.mainContent}>center</Paper>
            <Paper className={classes.right}>right</Paper>
        </Stack>
    );
}
