/**
 *
 * @author dong.nguyenthanh@powergatesoftware.com on 26/07/2023.
 *
 */

import { Stack, Typography } from '@mui/material';
import dayjs from 'dayjs';

/** components */
import IconBase from '@module-base/components/IconBase';

/** constants */
import { APP_NAME } from '@src/config';

/** utils */
import { useLanguage } from '@module-language/hooks/useLanguage';

/** styles */
import useStyles from './styles';

function AppInfo() {
    const language = useLanguage();
    const classes = useStyles();

    return (
        <Stack className={classes.info}>
            <IconBase name="appLogo" className={classes.infoIcon} />
            <Typography variant="h5" fontWeight={600}>
                {APP_NAME}
            </Typography>
            <span className={classes.infoDot} />
            <Typography variant="body2" fontWeight={600} textTransform="capitalize">
                {dayjs().locale(language.locale).format('dddd, DD/MM/YYYY')}
            </Typography>
        </Stack>
    );
}

export default AppInfo;
