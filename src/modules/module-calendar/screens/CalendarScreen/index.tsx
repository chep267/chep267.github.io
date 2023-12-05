/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

/** lib components */
import { Stack, Paper } from '@mui/material';

/** components */
import CalendarTitle from '@module-calendar/components/CalendarTitle';
import CalendarContent from '@module-calendar/components/CalendarContent';

/** styles */
import useStyles from './styles';

export default function CalendarScreen() {
    const classes = useStyles();

    return (
        <Stack className={classes.screen}>
            <Paper className={classes.mainContent}>
                <CalendarTitle />
                <CalendarContent />
            </Paper>
        </Stack>
    );
}
