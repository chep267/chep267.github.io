/**
 *
 * @author dong.nguyenthanh@powergatesoftware.com on 26/07/2023.
 *
 */

import { Stack, Paper } from '@mui/material';

/** styles */
import useStyles from './styles.ts';

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
