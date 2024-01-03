/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

/** lib components */
import { Stack, Paper } from '@mui/material';

/** components */
import { CalendarInfoTitle, CalendarInfoBody, CalendarInfoFooter } from '@module-calendar/components';

/** styles */
import useStyles from './styles';

export default function CalendarInfoScreen() {
    const classes = useStyles();
    return (
        <Stack className={classes.screen}>
            <Paper className={classes.mainContent}>
                <CalendarInfoTitle className={classes.title} />
                <CalendarInfoBody />
                <CalendarInfoFooter />
            </Paper>
        </Stack>
    );
}
