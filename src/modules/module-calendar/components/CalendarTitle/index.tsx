/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import * as React from 'react';
import dayjs from 'dayjs';
import { useIntl } from 'react-intl';

/** lib components */
import { Stack, Typography, IconButton } from '@mui/material';

/** components */
import { CalendarInfoTitle } from '@module-calendar/components';

/** utils */
import { calendarMessage } from '@module-calendar/utils';

/** hooks */
import { useLanguage } from '@module-language/hooks';
import { useCalendar } from '@module-calendar/hooks';

/** styles */
import useStyles from './styles';

/** types */
import type { Dayjs } from 'dayjs';

export default function CalendarTitle() {
    const { formatMessage } = useIntl();
    const {
        data: { locale },
    } = useLanguage();
    const CALENDAR = useCalendar();
    const classes = useStyles();
    const isToday = CALENDAR.method.isToday(CALENDAR.data.time);

    const onSelectDate = React.useCallback((value: Dayjs | null) => {
        if (value) {
            CALENDAR.method.setTime(value);
        }
    }, []);

    const renderButtonToday = React.useMemo(() => {
        const isToday = CALENDAR.method.isToday(CALENDAR.data.time);
        return (
            <IconButton className={classes.today} onClick={() => onSelectDate(dayjs())} disabled={isToday}>
                <Typography variant="h6">
                    {isToday ? '' : formatMessage(calendarMessage['module.calendar.text.today'])}
                </Typography>
            </IconButton>
        );
    }, [isToday, locale]);

    return (
        <Stack className={classes.title}>
            {renderButtonToday}
            <CalendarInfoTitle className={classes.titleRight} />
        </Stack>
    );
}
