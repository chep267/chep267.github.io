/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import * as React from 'react';
import classnames from 'classnames';
import { useIntl } from 'react-intl';
import { useLocation, useNavigate } from 'react-router-dom';

/** lib components */
import { Drawer, Button, Divider, Tooltip, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

/** icons */
import {
    Home as HomeIcon,
    Telegram as TelegramIcon,
    CalendarMonth as CalendarMonthIcon,
    KeyboardDoubleArrowRight as KeyboardDoubleArrowRightIcon,
    KeyboardDoubleArrowLeft as KeyboardDoubleArrowLeftIcon,
    Games as GamesIcon,
} from '@mui/icons-material';

/** components */
import ListBase from '@module-base/components/ListBase';

/** constants */
import { SCREEN } from '@module-global/constants/screen';

/** utils */
import { feedMessage } from '@module-feed/utils/messages';
import { messengerMessage } from '@module-messenger/utils/messages';
import { calendarMessage } from '@module-calendar/utils/messages';
import { gameMessage } from '@module-game/utils/messages';

/** hooks */
import { useBase } from '@module-base/hooks/useBase';

/** styles */
import useStyles from './styles';

const AppSider = React.memo(() => {
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
            {
                name: gameMessage['module.game.router.name'],
                path: SCREEN.GAME,
                icon: <GamesIcon />,
            },
        ],
        []
    );

    const renderList = React.useCallback(() => {
        const renderItem = (item: (typeof MENU_ROUTER)[number]) => {
            const title = formatMessage(item.name);
            return (
                <ListItem
                    key={item.path}
                    className={classnames(
                        classes.siderItem,
                        { [classes.siderItemSelected]: pathname.includes(item.path) },
                        'app-sider-item'
                    )}>
                    <Tooltip title={title} placement="right" disableHoverListener={open}>
                        <ListItemButton onClick={() => navigate(item.path)}>
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={title} />
                        </ListItemButton>
                    </Tooltip>
                </ListItem>
            );
        };
        return <ListBase className={classes.sider} data={MENU_ROUTER} renderItem={renderItem} />;
    }, [MENU_ROUTER, pathname]);

    const onClick = React.useCallback(() => toggleSider((prev) => !prev), []);

    return (
        <Drawer
            variant="permanent"
            open={open}
            className={classnames(classes.drawer, { [classes.drawerOpen]: open }, { [classes.drawerClose]: !open })}>
            <Button size="large" onClick={onClick}>
                {open ? <KeyboardDoubleArrowLeftIcon /> : <KeyboardDoubleArrowRightIcon />}
            </Button>
            <Divider />
            {renderList()}
        </Drawer>
    );
});

AppSider.displayName = 'AppSider';
export default AppSider;
