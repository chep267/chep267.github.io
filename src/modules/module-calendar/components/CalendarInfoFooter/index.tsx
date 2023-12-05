/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import { useIntl } from 'react-intl';

/** lib components */
import { Stack, Typography } from '@mui/material';

/** utils */
import { calendarMessage } from '@module-calendar/utils/messages';
import VietnameseDate from '@module-calendar/utils/helpers/Lunar';

/** hooks */
import { useCalendar } from '@module-calendar/hooks/useCalendar';

/** styles */
import useStyles from './styles';

export default function CalendarInfoFooter() {
    const { formatMessage } = useIntl();
    const CALENDAR = useCalendar();
    const classes = useStyles();

    const time = CALENDAR.data.time;
    const lunar = new VietnameseDate(new Date(`${time.year()}-${time.month() + 1}-${time.date()}`));

    return (
        <Stack className={classes.footer}>
            <Stack className={classes.footerItem}>
                <Typography variant="h5">{formatMessage(calendarMessage['module.calendar.text.day'])}</Typography>
                <Typography variant="h3">{lunar.day}</Typography>
                <Typography variant="h6">{`${lunar.celestialStemOfDay} ${lunar.terrestrialBranchOfDay}`}</Typography>
            </Stack>
            <Stack className={classes.footerItem}>
                <Typography variant="h5">{formatMessage(calendarMessage['module.calendar.text.month'])}</Typography>
                <Typography variant="h3">{lunar.month}</Typography>
                <Typography variant="h6">{`${lunar.celestialStemOfMonth} ${lunar.terrestrialBranchOfMonth}`}</Typography>
            </Stack>
            <Stack className={classes.footerItem}>
                <Typography variant="h5">{formatMessage(calendarMessage['module.calendar.text.year'])}</Typography>
                <Typography variant="h3">{lunar.year}</Typography>
                <Typography variant="h6">{`${lunar.celestialStemOfYear} ${lunar.terrestrialBranchOfYear}`}</Typography>
            </Stack>
        </Stack>
    );
}
