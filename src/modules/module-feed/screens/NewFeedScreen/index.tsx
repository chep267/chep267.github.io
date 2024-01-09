/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import { Stack, Paper } from '@mui/material';

/** styles */
import { useStyles } from './styles';

export default function NewFeedScreen() {
    const classes = useStyles();

    return (
        <Stack className={classes.screen}>
            <Paper className={classes.left_right}>NewFeedScreen left</Paper>
            <Paper className={classes.mainContent}>NewFeedScreen center</Paper>
            <Paper className={classes.left_right}>NewFeedScreen right</Paper>
        </Stack>
    );
}
