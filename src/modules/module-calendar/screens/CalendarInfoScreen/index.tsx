/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import * as React from 'react';

/** lib components */
import { Stack, Paper, Typography } from '@mui/material';

/** components */
import CalendarInfoTitle from '@module-calendar/components/CalendarInfoTitle';
import CalendarInfoFooter from '@module-calendar/components/CalendarInfoFooter';

/** hooks */
import { useCalendar } from '@module-calendar/hooks/useCalendar';

/** styles */
import useStyles from './styles';

export default function CalendarInfoScreen() {
    const classes = useStyles();
    const CALENDAR = useCalendar();
    const solar = CALENDAR.data.time;

    React.useEffect(() => {
        CALENDAR.method.setTime(solar);
    }, []);

    return (
        <Stack className={classes.screen}>
            <Paper className={classes.mainContent}>
                <CalendarInfoTitle />
                <Stack className={classes.body}>
                    <Stack>
                        <Typography variant="h1" fontSize="12rem">
                            {solar.date()}
                        </Typography>
                    </Stack>
                </Stack>
                <CalendarInfoFooter />
            </Paper>
        </Stack>
    );
}
