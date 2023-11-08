/**
 *
 * @author dong.nguyenthanh@powergatesoftware.com on 26/07/2023.
 *
 */

import dayjs from 'dayjs';

/** lib components */
import { Typography } from '@mui/material';

/** types */
import type { LocaleType } from '@module-language/models';

/** types */
type CalendarLabelType = {
    day: number;
    locale: LocaleType;
};

export default function CalendarLabel(props: CalendarLabelType) {
    const { day, locale } = props;

    return (
        <Typography variant="h6" color={day === 0 || day === 6 ? 'error.main' : ''}>
            {dayjs().day(day).locale(locale).format('ddd')}
        </Typography>
    );
}
