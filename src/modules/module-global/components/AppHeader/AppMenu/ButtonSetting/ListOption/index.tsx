/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import * as React from 'react';

/** lib components */
import { FormattedMessage } from 'react-intl';
import { List } from '@mui/material';
import {
    CalendarMonth as CalendarMonthIcon,
    DarkMode as DarkModeIcon,
    FiberManualRecord as FiberManualRecordIcon,
    LightMode as LightModeIcon,
    Logout as LogoutIcon,
    Palette as PaletteIcon,
    Translate as TranslateIcon,
} from '@mui/icons-material';

/** components */
import { NestedItem } from '@module-base/components';

/** utils */
import { themeMessage } from '@module-theme/utils/messages';
import { langMessage } from '@module-language/utils';
import { calendarMessage } from '@module-calendar/utils';
import { authMessage } from '@module-auth/utils';

/** hooks */
import { useTheme } from '@module-theme/hooks';
import { useLanguage } from '@module-language/hooks';
import { useSignOut } from '@module-auth/hooks';
import { useCalendar } from '@module-calendar/hooks';

/** styles */
import useStyles from '@module-global/components/AppHeader/styles';

/** types */
import type { NestedItemProps } from '@module-base/models';

export default function ListOption() {
    const THEME = useTheme();
    const LANGUAGE = useLanguage();
    const classes = useStyles();
    const SIGN_OUT = useSignOut();
    const CALENDAR = useCalendar();

    const menuBase = React.useRef<NestedItemProps[]>([
        {
            id: 'Theme',
            title: <FormattedMessage {...themeMessage['module.theme.theme']} />,
            icon: <PaletteIcon color="primary" />,
            divide: 'top-bottom',
            subMenu: [
                {
                    id: 'Theme-Dark',
                    title: <FormattedMessage {...themeMessage['module.theme.theme.dark']} />,
                    icon: <DarkModeIcon color="disabled" />,
                    onClick: () => THEME.method.setTheme('dark'),
                },
                {
                    id: 'Theme-Light',
                    title: <FormattedMessage {...themeMessage['module.theme.theme.light']} />,
                    icon: <LightModeIcon color="warning" />,
                    onClick: () => THEME.method.setTheme('light'),
                },
            ],
        },
        {
            id: 'Language',
            title: <FormattedMessage {...langMessage['module.language.lang']} />,
            icon: <TranslateIcon color="primary" />,
            divide: 'bottom',
            subMenu: [
                {
                    id: 'Language-Vi',
                    title: <FormattedMessage {...langMessage['module.language.lang.vi']} />,
                    icon: <span className={classes.flagIcon}>🇻🇳</span>,
                    onClick: () => LANGUAGE.method.setLanguage('vi'),
                },
                {
                    id: 'Language-En',
                    title: <FormattedMessage {...langMessage['module.language.lang.en']} />,
                    icon: <span className={classes.flagIcon}>🇬🇧</span>,
                    onClick: () => LANGUAGE.method.setLanguage('en'),
                },
            ],
        },
    ]).current;

    const menuCalendar = React.useMemo<NestedItemProps[]>(() => {
        return [
            {
                id: 'Calendar',
                title: <FormattedMessage {...calendarMessage['module.calendar.setting.display']} />,
                icon: <CalendarMonthIcon color="primary" />,
                divide: 'bottom',
                subMenu: [
                    {
                        id: 'default',
                        title: <FormattedMessage {...calendarMessage['module.calendar.setting.display.default']} />,
                        icon: (
                            <FiberManualRecordIcon
                                fontSize="small"
                                color={CALENDAR.data.display === 'sun' ? 'primary' : 'disabled'}
                            />
                        ),
                        onClick: () => CALENDAR.method.setDisplay('sun'),
                    },
                    {
                        id: 'mon',
                        title: <FormattedMessage {...calendarMessage['module.calendar.setting.display.mon']} />,
                        icon: (
                            <FiberManualRecordIcon
                                fontSize="small"
                                color={CALENDAR.data.display === 'mon' ? 'primary' : 'disabled'}
                            />
                        ),
                        onClick: () => CALENDAR.method.setDisplay('mon'),
                    },
                    {
                        id: 'sat',
                        title: <FormattedMessage {...calendarMessage['module.calendar.setting.display.sat']} />,
                        icon: (
                            <FiberManualRecordIcon
                                fontSize="small"
                                color={CALENDAR.data.display === 'sat' ? 'primary' : 'disabled'}
                            />
                        ),
                        onClick: () => CALENDAR.method.setDisplay('sat'),
                    },
                    {
                        id: 'only.month',
                        title: <FormattedMessage {...calendarMessage['module.calendar.setting.display.only.month']} />,
                        icon: (
                            <FiberManualRecordIcon
                                fontSize="small"
                                color={CALENDAR.data.isOnlyMonth ? 'primary' : 'disabled'}
                            />
                        ),
                        divide: 'top',
                        onClick: () => CALENDAR.method.setIsOnlyMonth((prev) => !prev),
                    },
                    {
                        id: 'both.month',
                        title: <FormattedMessage {...calendarMessage['module.calendar.setting.display.both.month']} />,
                        icon: (
                            <FiberManualRecordIcon
                                fontSize="small"
                                color={CALENDAR.data.isOnlyMonth ? 'disabled' : 'primary'}
                            />
                        ),
                        onClick: () => CALENDAR.method.setIsOnlyMonth((prev) => !prev),
                    },
                ],
            },
        ];
    }, [CALENDAR.data.display, CALENDAR.data.isOnlyMonth]);

    const menuSignOut = React.useMemo<NestedItemProps[]>(() => {
        return [
            {
                id: 'sign-out',
                title: <FormattedMessage {...authMessage['module.auth.form.title.signout']} />,
                icon: <LogoutIcon color="primary" />,
                onClick: () => SIGN_OUT.mutate({}),
                divide: 'bottom',
                loading: SIGN_OUT.isPending,
            },
        ];
    }, [SIGN_OUT.isPending]);

    const renderMenuBase = React.useMemo(() => {
        return menuBase.map((item) => <NestedItem key={item?.id} {...item} />);
    }, []);

    const renderMenuCalendar = React.useMemo(() => {
        return menuCalendar.map((item) => <NestedItem key={item?.id} {...item} />);
    }, [menuCalendar]);

    const renderMenuSignOut = React.useMemo(() => {
        return menuSignOut.map((item) => <NestedItem key={item?.id} {...item} />);
    }, [menuSignOut]);

    return (
        <List component="nav">
            {renderMenuBase}
            {SIGN_OUT.isAuth ? renderMenuCalendar : null}
            {SIGN_OUT.isAuth ? renderMenuSignOut : null}
        </List>
    );
}
