/**
 *
 * @author dong.nguyenthanh@powergatesoftware.com on 26/07/2023.
 *
 */

import { Stack, Button, Tooltip } from '@mui/material';

/** mui icons */
import NotificationsIcon from '@mui/icons-material/Notifications';
import MessageIcon from '@mui/icons-material/Message';

/** components */
import ButtonMenu from './ButtonMenu';

/** utils */
import { useBase } from '@module-base/hooks/useBase';
import { useAuth } from '@module-auth/hooks/useAuth';

/** styles */
import useStyles from './styles';

function AppMenu() {
    const { isAuth } = useAuth();
    const { notify } = useBase();
    const classes = useStyles();

    const onDev = () => {
        notify.toggleNotify({ open: true, mode: 'warning', message: 'In developing!' });
    };

    return (
        <Stack className={classes.info}>
            {isAuth ? (
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
            <ButtonMenu />
        </Stack>
    );
}

export default AppMenu;
