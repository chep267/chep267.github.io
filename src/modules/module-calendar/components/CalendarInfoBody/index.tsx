/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import * as React from 'react';
import classnames from 'classnames';

/** lib components */
import { Stack, Typography } from '@mui/material';

/** components */
import { SelectDate } from '@module-calendar/components';

/** hooks */
import { useLanguage } from '@module-language/hooks';
import { useCalendar } from '@module-calendar/hooks';

/** styles */
import useStyles from './styles';

/** types */
import type { Dayjs } from 'dayjs';

export default function CalendarInfoScreen() {
    const CALENDAR = useCalendar();
    const {
        data: { locale },
    } = useLanguage();
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
