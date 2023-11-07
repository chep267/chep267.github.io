/**
 *
 * @author dong.nguyenthanh@powergatesoftware.com on 26/07/2023.
 *
 */

import * as React from 'react';
import classnames from 'classnames';
import { useIntl } from 'react-intl';
import { useLocation, useNavigate } from 'react-router-dom';

/** lib components */
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Tooltip from '@mui/material/Tooltip';

/** icons */
import HomeIcon from '@mui/icons-material/Home';
import TelegramIcon from '@mui/icons-material/Telegram';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';

/** constants */
import { SCREEN } from '@module-global/constants/screen';

/** utils */
import { feedMessage } from '@module-feed/utils/messages';
import { messengerMessage } from '@module-messenger/utils/messages';

/** hooks */
import { useBase } from '@module-base/hooks/useBase';

/** styles */
import useStyles from './styles';

const AppMenu = React.memo(() => {
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const { formatMessage } = useIntl();
    const {
        sider: { open, toggleSider },
    } = useBase();
    const classes = useStyles();

    const MENU_ROUTER = React.useMemo(
        () => [
            {
                name: feedMessage['module.feed.feed'],
                path: SCREEN.FEED,
                icon: <HomeIcon />,
            },
            {
                name: messengerMessage['module.messenger.messenger'],
                path: SCREEN.MESSENGER,
                icon: <TelegramIcon />,
            },
        ],
        []
    );

    const renderMenu = () => {
        return (
            <List className={classes.menu}>
                {MENU_ROUTER.map((item) => {
                    const title = formatMessage(item.name);
                    return (
                        <ListItem
                            key={item.path}
                            className={classnames(
                                classes.menuItem,
                                { [classes.menuItemSelected]: pathname.includes(item.path) },
                                { [classes.menuItemClose]: !open }
                            )}>
                            <Tooltip title={title} placement="right" disableHoverListener={open}>
                                <ListItemButton onClick={() => navigate(item.path)}>
                                    <ListItemIcon>{item.icon}</ListItemIcon>
                                    <ListItemText primary={title} />
                                </ListItemButton>
                            </Tooltip>
                        </ListItem>
                    );
                })}
            </List>
        );
    };

    return (
        <Drawer
            variant="permanent"
            open={open}
            className={classnames(classes.drawer, { [classes.drawerOpen]: open }, { [classes.drawerClose]: !open })}>
            <Button size="large" onClick={() => toggleSider(!open)}>
                {open ? <KeyboardDoubleArrowLeftIcon /> : <KeyboardDoubleArrowRightIcon />}
            </Button>
            <Divider />
            {renderMenu()}
        </Drawer>
    );
});

AppMenu.displayName = 'AppMenu';
export default AppMenu;
