/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import dayjs from 'dayjs';

/** lib components */
import { Typography } from '@mui/material';

/** utils */
import { useLanguage } from '@module-language/hooks/useLanguage';

export default function TimeToday() {
    const {
        data: { locale },
    } = useLanguage();

    return (
        <Typography variant="body2" fontWeight={600} textTransform="capitalize">
            {dayjs().locale(locale).format('dddd, DD/MM/YYYY')}
        </Typography>
    );
}
