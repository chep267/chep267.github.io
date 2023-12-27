/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import { Stack, Button, Tooltip } from '@mui/material';

/** icons */
import NotificationsIcon from '@mui/icons-material/Notifications';
import MessageIcon from '@mui/icons-material/Message';

/** components */
import ButtonSetting from './ButtonSetting';

/** utils */
import { useNotify } from '@module-base/hooks/useNotify';
import { useAuth } from '@module-auth/hooks/useAuth';

/** styles */
import useStyles from './styles';

export default function AppMenu() {
    const AUTH = useAuth();
    const NOTIFY = useNotify();
    const classes = useStyles();

    const onDev = () => {
        NOTIFY.method.toggleNotify({ open: true, mode: 'warning', message: 'In developing!' });
    };

    return (
        <Stack className={classes.menu}>
            {AUTH.data.isAuth ? (
                <>
                    <Tooltip title="Messenger">
                        <Button className={classes.button} variant="outlined" onClick={onDev}>
                            <MessageIcon />
                        </Button>
                    </Tooltip>
                    <Tooltip title="Notify">
                        <Button className={classes.button} variant="outlined" onClick={onDev}>
                            <NotificationsIcon />
                        </Button>
                    </Tooltip>
                </>
            ) : null}
            <ButtonSetting />
        </Stack>
    );
}
