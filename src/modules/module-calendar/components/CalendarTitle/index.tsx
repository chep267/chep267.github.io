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
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

/** icons */
import {
    KeyboardDoubleArrowRight as KeyboardDoubleArrowRightIcon,
    KeyboardDoubleArrowLeft as KeyboardDoubleArrowLeftIcon,
    KeyboardArrowRight as KeyboardArrowRightIcon,
    KeyboardArrowLeft as KeyboardArrowLeftIcon,
} from '@mui/icons-material';

/** utils */
import { calendarMessage } from '@module-calendar/utils/messages';

/** hooks */
import { useLanguage } from '@module-language/hooks/useLanguage';
import { useCalendar } from '@module-calendar/hooks/useCalendar';

/** styles */
import useStyles from './styles';

/** types */
import type { Dayjs } from 'dayjs';

export default function CalendarTitle() {
    const { formatMessage } = useIntl();
    const { locale } = useLanguage();
    const CALENDAR = useCalendar();
    const classes = useStyles();

    const genTitleMessage = () => {
        const month = CALENDAR.data.time.format(locale === 'en' ? 'MMMM' : 'MM');
        const year = CALENDAR.data.time.format('YYYY');
        return formatMessage(calendarMessage['module.calendar.component.calendar.title.text'], { month, year });
    };

    const onSelectDate = React.useCallback((value: Dayjs | null) => {
        if (value) {
            CALENDAR.method.setTime(value);
        }
    }, []);

    const onChangeTime = React.useCallback((mode: 'prev' | 'next', type: 'month' | 'year') => {
        CALENDAR.method.setTime((prevTime) => prevTime.add(mode === 'prev' ? -1 : 1, type));
    }, []);

    const renderButtonToday = React.useMemo(() => {
        return (
            <IconButton className={classes.today} onClick={() => onSelectDate(dayjs())} disabled={CALENDAR.data.isToday}>
                <Typography variant="h6">{formatMessage(calendarMessage['module.calendar.text.today'])}</Typography>
            </IconButton>
        );
    }, [CALENDAR.data.isToday, locale]);

    const renderButtonLeft = React.useMemo(() => {
        return (
            <Stack className={classes.titleIcon}>
                <IconButton onClick={() => onChangeTime('prev', 'year')}>
                    <KeyboardDoubleArrowLeftIcon />
                </IconButton>
                <IconButton onClick={() => onChangeTime('prev', 'month')}>
                    <KeyboardArrowLeftIcon />
                </IconButton>
            </Stack>
        );
    }, []);

    const renderButtonRight = React.useMemo(() => {
        return (
            <Stack className={classes.titleIcon}>
                <IconButton onClick={() => onChangeTime('next', 'month')}>
                    <KeyboardArrowRightIcon />
                </IconButton>
                <IconButton onClick={() => onChangeTime('next', 'year')}>
                    <KeyboardDoubleArrowRightIcon />
                </IconButton>
            </Stack>
        );
    }, []);

    return (
        <Stack className={classes.title}>
            {renderButtonToday}
            <Stack className={classes.titleRight}>
                {renderButtonLeft}
                <Stack className={classes.titleText}>
                    <Typography variant="h5">{genTitleMessage()}</Typography>
                    <DatePicker
                        className={classes.date_piker}
                        views={['month', 'year']}
                        value={CALENDAR.data.time}
                        onChange={onSelectDate}
                    />
                </Stack>
                {renderButtonRight}
            </Stack>
        </Stack>
    );
}
