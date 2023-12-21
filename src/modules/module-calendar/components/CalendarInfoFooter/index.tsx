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

    const renderItem = ({ title, content, subContent }: Record<'title' | 'content' | 'subContent', string | number>) => (
        <Stack className={classes.footerItem}>
            <Typography variant="h5">{title}</Typography>
            <Typography variant="h3">{content}</Typography>
            <Typography variant="h6">{subContent}</Typography>
        </Stack>
    );

    return (
        <Stack className={classes.footer}>
            {renderItem({
                title: formatMessage(calendarMessage['module.calendar.text.day']),
                content: lunar.day,
                subContent: `${lunar.celestialStemOfDay} ${lunar.terrestrialBranchOfDay}`,
            })}
            {renderItem({
                title: formatMessage(calendarMessage['module.calendar.text.month']),
                content: lunar.month,
                subContent: `${lunar.celestialStemOfMonth} ${lunar.terrestrialBranchOfMonth}`,
            })}
            {renderItem({
                title: formatMessage(calendarMessage['module.calendar.text.year']),
                content: lunar.year,
                subContent: `${lunar.celestialStemOfYear} ${lunar.terrestrialBranchOfYear}`,
            })}
        </Stack>
    );
}
