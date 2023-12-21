/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import * as React from 'react';
import classnames from 'classnames';
import { useIntl } from 'react-intl';

/** lib components */
import { Stack, Typography, IconButton } from '@mui/material';
import {
    KeyboardDoubleArrowRight as KeyboardDoubleArrowRightIcon,
    KeyboardDoubleArrowLeft as KeyboardDoubleArrowLeftIcon,
    KeyboardArrowRight as KeyboardArrowRightIcon,
    KeyboardArrowLeft as KeyboardArrowLeftIcon,
} from '@mui/icons-material';

/** components */
import SelectDate from '@module-calendar/components/SelectDate';

/** utils */
import { calendarMessage } from '@module-calendar/utils/messages';

/** hooks */
import { useLanguage } from '@module-language/hooks/useLanguage';
import { useCalendar } from '@module-calendar/hooks/useCalendar.ts';

/** styles */
import useStyles from './styles';

/** types */
import type { Dayjs } from 'dayjs';

type CalendarInfoTitleProps = {
    className?: string;
};

export default function CalendarInfoTitle(props: CalendarInfoTitleProps) {
    const { className } = props;
    const { formatMessage } = useIntl();
    const {
        data: { locale },
    } = useLanguage();
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

    const renderButtonLeft = React.useMemo(() => {
        return (
            <Stack className={classes.titleIcon}>
                <IconButton onClick={() => onChangeTime('prev', 'year')}>
                    <KeyboardDoubleArrowLeftIcon color="primary" />
                </IconButton>
                <IconButton onClick={() => onChangeTime('prev', 'month')}>
                    <KeyboardArrowLeftIcon color="primary" />
                </IconButton>
            </Stack>
        );
    }, []);

    const renderButtonRight = React.useMemo(() => {
        return (
            <Stack className={classes.titleIcon}>
                <IconButton onClick={() => onChangeTime('next', 'month')}>
                    <KeyboardArrowRightIcon color="primary" />
                </IconButton>
                <IconButton onClick={() => onChangeTime('next', 'year')}>
                    <KeyboardDoubleArrowRightIcon color="primary" />
                </IconButton>
            </Stack>
        );
    }, []);

    return (
        <Stack className={classnames(classes.title, className)}>
            {renderButtonLeft}
            <SelectDate views={['month', 'year']} value={CALENDAR.data.time} onChange={onSelectDate}>
                <Typography variant="h5" color="primary.main">
                    {genTitleMessage()}
                </Typography>
            </SelectDate>
            {renderButtonRight}
        </Stack>
    );
}
