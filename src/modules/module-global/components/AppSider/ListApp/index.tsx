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
import { ListBase } from '@module-base/components';
import AppItem from './AppItem';

/** constants */
import { ScreenPath } from '@module-global/constants';

/** utils */
import { feedMessage } from '@module-feed/utils';
import { messengerMessage } from '@module-messenger/utils';
import { calendarMessage } from '@module-calendar/utils';
import { gameMessage } from '@module-game/utils';

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
            path: ScreenPath.FEED,
            name: <FormattedMessage {...feedMessage['module.feed.router.name']} />,
            icon: <HomeIcon />,
            onClick: () => navigate(ScreenPath.FEED),
        },
        {
            path: ScreenPath.MESSENGER,
            name: <FormattedMessage {...messengerMessage['module.messenger.router.name']} />,
            icon: <TelegramIcon />,
            onClick: () => navigate(ScreenPath.MESSENGER),
        },
        {
            path: ScreenPath.CALENDAR,
            name: <FormattedMessage {...calendarMessage['module.calendar.router.name']} />,
            icon: <CalendarMonthIcon />,
            onClick: () => navigate(ScreenPath.CALENDAR),
        },
        {
            path: ScreenPath.GAME,
            name: <FormattedMessage {...gameMessage['module.game.router.name']} />,
            icon: <GamesIcon />,
            onClick: () => navigate(ScreenPath.GAME),
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
