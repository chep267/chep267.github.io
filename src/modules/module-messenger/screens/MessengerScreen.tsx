/**
 *
 * @author dong.nguyenthanh@powergatesoftware.com on 26/07/2023.
 *
 */

import { Stack, Paper } from '@mui/material';

/** styles */
import useStyles from './styles';

export default function MessengerScreen() {
    const classes = useStyles();

    return (
        <Stack className={classes.screen}>
            <Paper className={classes.left_right}>left</Paper>
            <Paper className={classes.mainContent}>center</Paper>
            <Paper className={classes.left_right}>right</Paper>
        </Stack>
    );
}
