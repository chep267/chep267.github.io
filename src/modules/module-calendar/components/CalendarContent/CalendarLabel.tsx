/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import dayjs from 'dayjs';

/** lib components */
import { Typography } from '@mui/material';

/** hooks */
import { useLanguage } from '@module-language/hooks';

/** types */
type CalendarLabelType = {
    day: number;
};

export default function CalendarLabel(props: CalendarLabelType) {
    const { day } = props;
    const {
        data: { locale },
    } = useLanguage();

    return (
        <Typography variant="h6" color={day === 0 || day === 6 ? 'error.main' : ''}>
            {dayjs().day(day).locale(locale).format('ddd')}
        </Typography>
    );
}
