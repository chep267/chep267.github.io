/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

/** lib components */
import { Stack, Typography } from '@mui/material';

/** components */
import IconBase from '@module-base/components/IconBase';
import TimeToday from '@module-global/components/AppHeader/AppInfo/TimeToday';

/** constants */
import { APP_NAME } from '@root/utils/config';

/** styles */
import useStyles from './styles';

export default function AppInfo() {
    const classes = useStyles();

    return (
        <Stack className={classes.info}>
            <IconBase name="appLogo" className={classes.infoIcon} />
            <Typography variant="h5" fontWeight={600}>
                {APP_NAME}
            </Typography>
            <span className={classes.infoDot} />
            <TimeToday />
        </Stack>
    );
}
