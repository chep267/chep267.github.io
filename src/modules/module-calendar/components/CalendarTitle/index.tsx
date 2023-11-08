/**
 *
 * @author dong.nguyenthanh@powergatesoftware.com on 26/07/2023.
 *
 */

import { useIntl } from 'react-intl';

/** lib components */
import { Stack, Typography, IconButton } from '@mui/material';

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

/** styles */
import useStyles from './styles';

/** types */
import type { Dayjs } from 'dayjs';

type Props = {
    time: Dayjs;
    onChangeTime: (time: Dayjs) => void;
};

export default function CalendarTitle(props: Props) {
    const { time, onChangeTime } = props;
    const { locale } = useLanguage();
    const { formatMessage } = useIntl();
    const classes = useStyles();

    const onChange = (mode: 'prev' | 'next', type: 'month' | 'year') => {
        onChangeTime(time.add(mode === 'prev' ? -1 : 1, type));
    };

    const genTitleMessage = () => {
        const month = time.format(locale === 'en' ? 'MMMM' : 'MM');
        const year = time.format('YYYY');
        return formatMessage(calendarMessage['module.calendar.component.calendar.title.text'], { month, year });
    };

    return (
        <Stack className={classes.title}>
            <Stack className={classes.titleIcon}>
                <IconButton onClick={() => onChange('prev', 'year')}>
                    <KeyboardDoubleArrowLeftIcon />
                </IconButton>
                <IconButton onClick={() => onChange('prev', 'month')}>
                    <KeyboardArrowLeftIcon />
                </IconButton>
            </Stack>
            <Typography variant="h6" fontWeight={600}>
                {genTitleMessage()}
            </Typography>
            <Stack className={classes.titleIcon}>
                <IconButton onClick={() => onChange('next', 'month')}>
                    <KeyboardArrowRightIcon />
                </IconButton>
                <IconButton onClick={() => onChange('next', 'year')}>
                    <KeyboardDoubleArrowRightIcon />
                </IconButton>
            </Stack>
        </Stack>
    );
}
