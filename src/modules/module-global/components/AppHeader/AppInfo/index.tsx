/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

/** lib components */
import { Link } from 'react-router-dom';
import { Stack, Typography } from '@mui/material';

/** components */
import IconBase from '@module-base/components/IconBase';
import TimeToday from '@module-global/components/AppHeader/AppInfo/TimeToday';

/** constants */
import { APP_NAME } from '@root/utils/config';
import { SCREEN } from '@module-global/constants/screen';

/** styles */
import useStyles from './styles';

export default function AppInfo() {
    const classes = useStyles();

    return (
        <Stack className={classes.info}>
            <Link to={SCREEN.HOME} replace>
                <Stack className={classes.info}>
                    <IconBase name="appLogo" className={classes.infoIcon} />
                    <Typography variant="h5" fontWeight={600}>
                        {APP_NAME}
                    </Typography>
                </Stack>
            </Link>
            <span className={classes.infoDot} />
            <TimeToday />
        </Stack>
    );
}
