/**
 *
 * @author dong.nguyenthanh@powergatesoftware.com on 26/07/2023.
 *
 */

import * as React from 'react';
import dayjs from 'dayjs';

/** lib components */
import { Stack, Paper } from '@mui/material';

/** components */
import CalendarTitle from '@module-calendar/components/CalendarTitle';
import CalendarContent from '@module-calendar/components/CalendarContent';

/** styles */
import useStyles from './styles';

export default function CalendarScreen() {
    const classes = useStyles();

    const [time, setTime] = React.useState(dayjs());

    return (
        <Stack className={classes.screen}>
            <Paper className={classes.mainContent}>
                <CalendarTitle time={time} onChangeTime={setTime} />
                <CalendarContent time={time} />
            </Paper>
        </Stack>
    );
}