/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import classnames from 'classnames';

/** lib components */
import { Stack, Typography } from '@mui/material';

/** hooks */
import { useCalendar } from '@module-calendar/hooks/useCalendar';
import { useLanguage } from '@module-language/hooks/useLanguage';

/** styles */
import useStyles from './styles';
import SelectDate from '@module-calendar/components/SelectDate';
import * as React from 'react';
import { Dayjs } from 'dayjs';

export default function CalendarInfoScreen() {
    const CALENDAR = useCalendar();
    const { locale } = useLanguage();
    const classes = useStyles();

    const solar = CALENDAR.data.time;
    const isWeekend = CALENDAR.method.isWeekend(solar);

    const onSelectDate = React.useCallback((value: Dayjs | null) => {
        if (value) {
            CALENDAR.method.setTime(value);
        }
    }, []);

    return (
        <Stack className={classes.body}>
            <SelectDate className={classes.selectDay} views={['day']} value={CALENDAR.data.time} onChange={onSelectDate}>
                <Typography variant="h1" className={classnames(classes.solarDay, { [classes.weekendDay]: isWeekend })}>
                    {solar.date()}
                </Typography>
                <Typography variant="h4" textTransform="capitalize">
                    {solar.locale(locale).format('dddd')}
                </Typography>
            </SelectDate>
        </Stack>
    );
}
