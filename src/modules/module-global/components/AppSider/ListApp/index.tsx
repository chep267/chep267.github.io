/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import * as React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

/** lib components */
import { FormattedMessage } from 'react-intl';

/** icons */
import {
    Home as HomeIcon,
    Telegram as TelegramIcon,
    CalendarMonth as CalendarMonthIcon,
    Games as GamesIcon,
} from '@mui/icons-material';

/** components */
import ListBase from '@module-base/components/ListBase';
import AppItem from './AppItem';

/** constants */
import { SCREEN } from '@module-global/constants/screen';

/** utils */
import { feedMessage } from '@module-feed/utils/messages';
import { messengerMessage } from '@module-messenger/utils/messages';
import { calendarMessage } from '@module-calendar/utils/messages';
import { gameMessage } from '@module-game/utils/messages';

/** styles */
import useStyles from './styles';

const ListApp = React.memo(() => {
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const classes = useStyles();

    const router = `/${pathname.split('/')[1]}`;

    const MENU_ROUTER = React.useRef([
        {
            name: <FormattedMessage {...feedMessage['module.feed.router.name']} />,
            path: SCREEN.FEED,
            icon: <HomeIcon />,
            onClick: () => navigate(SCREEN.FEED),
        },
        {
            name: <FormattedMessage {...messengerMessage['module.messenger.router.name']} />,
            path: SCREEN.MESSENGER,
            icon: <TelegramIcon />,
            onClick: () => navigate(SCREEN.MESSENGER),
        },
        {
            name: <FormattedMessage {...calendarMessage['module.calendar.router.name']} />,
            path: SCREEN.CALENDAR,
            icon: <CalendarMonthIcon />,

            onClick: () => navigate(SCREEN.CALENDAR),
        },
        {
            name: <FormattedMessage {...gameMessage['module.game.router.name']} />,
            path: SCREEN.GAME,
            icon: <GamesIcon />,
            onClick: () => navigate(SCREEN.GAME),
        },
    ]).current;

    const renderItem = (item: (typeof MENU_ROUTER)[number]) => {
        return <AppItem name={item.name} onClick={item.onClick} icon={item.icon} isSelected={item.path === router} />;
    };

    return <ListBase className={classes.listApp} data={MENU_ROUTER} renderItem={renderItem} />;
});

ListApp.displayName = 'ListApp';
export default ListApp;
