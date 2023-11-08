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
import { Drawer, Button, Divider, Tooltip, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

/** icons */
import {
    Home as HomeIcon,
    Telegram as TelegramIcon,
    CalendarMonth as CalendarMonthIcon,
    KeyboardDoubleArrowRight as KeyboardDoubleArrowRightIcon,
    KeyboardDoubleArrowLeft as KeyboardDoubleArrowLeftIcon,
} from '@mui/icons-material';

/** constants */
import { SCREEN } from '@module-global/constants/screen';

/** utils */
import { feedMessage } from '@module-feed/utils/messages';
import { messengerMessage } from '@module-messenger/utils/messages';
import { calendarMessage } from '@module-calendar/utils/messages';

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
                name: feedMessage['module.feed.router.name'],
                path: SCREEN.FEED,
                icon: <HomeIcon />,
            },
            {
                name: messengerMessage['module.messenger.router.name'],
                path: SCREEN.MESSENGER,
                icon: <TelegramIcon />,
            },
            {
                name: calendarMessage['module.calendar.router.name'],
                path: SCREEN.CALENDAR,
                icon: <CalendarMonthIcon />,
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
