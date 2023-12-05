/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

/** lib components */
import { Stack, Typography } from '@mui/material';

/** hooks */
import { useCalendar } from '@module-calendar/hooks/useCalendar';
import { useLanguage } from '@module-language/hooks/useLanguage';

/** styles */
import useStyles from './styles';

export default function CalendarInfoScreen() {
    const CALENDAR = useCalendar();
    const { locale } = useLanguage();
    const classes = useStyles();
    const solar = CALENDAR.data.time;

    return (
        <Stack className={classes.body}>
            <Typography variant="h1" fontSize="12rem">
                {solar.date()}
            </Typography>
            <Typography variant="h4" textTransform="capitalize">
                {solar.locale(locale).format('dddd')}
            </Typography>
        </Stack>
    );
}
