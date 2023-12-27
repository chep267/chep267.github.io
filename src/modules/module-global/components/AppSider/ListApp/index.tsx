/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import * as React from 'react';
import classnames from 'classnames';
import { useLocation, useNavigate } from 'react-router-dom';

/** lib components */
import { FormattedMessage } from 'react-intl';
import { Tooltip, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

/** icons */
import {
    Home as HomeIcon,
    Telegram as TelegramIcon,
    CalendarMonth as CalendarMonthIcon,
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

export default function ListApp() {
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const classes = useStyles();
    const { sider: SIDER } = useBase();

    const MENU_ROUTER = React.useRef([
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
    ]).current;

    const renderItem = (item: (typeof MENU_ROUTER)[number]) => {
        const title = <FormattedMessage {...item.name} />;
        return (
            <ListItem
                key={item.path}
                className={classnames(classes.listItem, { [classes.listItemSelected]: pathname.includes(item.path) })}>
                <Tooltip title={title} placement="right" disableHoverListener={SIDER.open}>
                    <ListItemButton onClick={() => navigate(item.path)}>
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText primary={title} />
                    </ListItemButton>
                </Tooltip>
            </ListItem>
        );
    };

    return <ListBase className={classes.listApp} data={MENU_ROUTER} renderItem={renderItem} />;
}
