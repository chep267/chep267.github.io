/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import { Stack } from '@mui/material';

/** icons */
import { Notifications as NotificationsIcon, Message as MessageIcon } from '@mui/icons-material';

/** components */
import ButtonSetting from './ButtonSetting';
import ButtonDev from './ButtonDev';

/** utils */
import { useAuth } from '@module-auth/hooks';

/** styles */
import useStyles from './styles';

export default function AppMenu() {
    const AUTH = useAuth();
    const classes = useStyles();

    return (
        <Stack className={classes.menu}>
            {AUTH.data.isAuth ? (
                <>
                    <ButtonDev tooltip="Messenger" icon={<MessageIcon />} />
                    <ButtonDev tooltip="Notify" icon={<NotificationsIcon />} />
                </>
            ) : null}
            <ButtonSetting />
        </Stack>
    );
}
