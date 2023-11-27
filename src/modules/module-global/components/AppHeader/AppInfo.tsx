/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import dayjs from 'dayjs';

/** lib components */
import { Stack, Typography } from '@mui/material';

/** components */
import IconBase from '@module-base/components/IconBase';

/** constants */
import { APP_NAME } from '@root/utils/config';

/** utils */
import { useLanguage } from '@module-language/hooks/useLanguage';

/** styles */
import useStyles from './styles';

function AppInfo() {
    const { locale } = useLanguage();
    const classes = useStyles();

    return (
        <Stack className={classes.info}>
            <IconBase name="appLogo" className={classes.infoIcon} />
            <Typography variant="h5" fontWeight={600}>
                {APP_NAME}
            </Typography>
            <span className={classes.infoDot} />
            <Typography variant="body2" fontWeight={600} textTransform="capitalize">
                {dayjs().locale(locale).format('dddd, DD/MM/YYYY')}
            </Typography>
        </Stack>
    );
}

export default AppInfo;
