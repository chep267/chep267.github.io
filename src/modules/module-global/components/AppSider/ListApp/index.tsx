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

/** types */
import type { ListAppProps, TypeAppItem } from '@module-global/models';

const ListApp = React.memo((props: ListAppProps) => {
    const { isTooltip } = props;
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const classes = useStyles();

    const MENU_ROUTER = React.useRef<TypeAppItem[]>([
        {
            path: SCREEN.FEED,
            name: <FormattedMessage {...feedMessage['module.feed.router.name']} />,
            icon: <HomeIcon />,
            onClick: () => navigate(SCREEN.FEED),
        },
        {
            path: SCREEN.MESSENGER,
            name: <FormattedMessage {...messengerMessage['module.messenger.router.name']} />,
            icon: <TelegramIcon />,
            onClick: () => navigate(SCREEN.MESSENGER),
        },
        {
            path: SCREEN.CALENDAR,
            name: <FormattedMessage {...calendarMessage['module.calendar.router.name']} />,
            icon: <CalendarMonthIcon />,
            onClick: () => navigate(SCREEN.CALENDAR),
        },
        {
            path: SCREEN.GAME,
            name: <FormattedMessage {...gameMessage['module.game.router.name']} />,
            icon: <GamesIcon />,
            onClick: () => navigate(SCREEN.GAME),
        },
    ]).current;

    const router = `/${pathname.split('/')[1]}`;

    const renderItem = (item: TypeAppItem) => {
        return <AppItem key={item.path} isSelected={item.path === router} isTooltip={isTooltip} item={item} />;
    };

    return <ListBase className={classes.listApp} data={MENU_ROUTER} renderItem={renderItem} />;
});

ListApp.displayName = 'ListApp';
export default ListApp;
