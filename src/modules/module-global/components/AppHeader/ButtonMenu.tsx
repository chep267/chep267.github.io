/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import * as React from 'react';
import { useIntl } from 'react-intl';

/** lib components */
import {
    Button,
    Divider,
    Tooltip,
    Collapse,
    CircularProgress,
    Menu,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from '@mui/material';

/** icons */
import {
    Menu as MenuIcon,
    DarkMode as DarkModeIcon,
    LightMode as LightModeIcon,
    Translate as TranslateIcon,
    ExpandLess as ExpandLessIcon,
    ExpandMore as ExpandMoreIcon,
    Logout as LogoutIcon,
    Palette as PaletteIcon,
    CalendarMonth as CalendarMonthIcon,
} from '@mui/icons-material';

/** constants */
import { emptyArray } from '@module-base/constants/defaultValue';

/** utils */
import { baseMessage } from '@module-base/utils/messages';
import { themeMessage } from '@module-theme/utils/messages';
import { langMessage } from '@module-language/utils/messages';
import { calendarMessage } from '@module-calendar/utils/messages';
import { authMessage } from '@module-auth/utils/messages';

/** hooks */
import { useTheme } from '@module-theme/hooks/useTheme';
import { useSignOut } from '@module-auth/hooks/useSignOut';
import { useLanguage } from '@module-language/hooks/useLanguage';
import { useCalendar } from '@module-calendar/hooks/useCalendar';

/** styles */
import useStyles from './styles';

/** types */
import type { ElementClickEvent } from '@module-base/models';

type MenuItemProps = {
    id?: string;
    icon?: React.ReactNode;
    loading?: boolean;
    title?: string;
    divide?: boolean;
    subMenu?: MenuItemProps[];
    subIndex?: number;
    onClick?(event: ElementClickEvent<HTMLDivElement>, isExpand?: boolean): void;
};

function MenuItem(props: MenuItemProps) {
    const { subIndex = 1, divide, loading, onClick, title, icon = ' ', subMenu } = props;
    const classes = useStyles();
    const hasSub = (subMenu?.length || 0) > 0;

    const [open, setOpen] = React.useState(false);

    const toggleOpen = React.useCallback((event: ElementClickEvent<HTMLDivElement>) => {
        if (!hasSub) {
            return onClick?.(event);
        }
        return setOpen((prev) => {
            onClick?.(event, !prev);
            return !prev;
        });
    }, []);

    const styleIcon = React.useMemo(() => ({ marginLeft: subIndex * 16 }), [subIndex]);

    return (
        <>
            <ListItemButton onClick={toggleOpen}>
                <ListItemIcon style={styleIcon}>{icon}</ListItemIcon>
                {loading ? <CircularProgress size={26} className={classes.loadingIcon} /> : <ListItemText primary={title} />}
                {!hasSub ? null : open ? (
                    <ExpandLessIcon className={classes.menuIcon} />
                ) : (
                    <ExpandMoreIcon className={classes.menuIcon} />
                )}
            </ListItemButton>
            {hasSub ? (
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        {subMenu?.map((value) => (
                            <MenuItem key={value?.id || value?.title} {...value} subIndex={subIndex + 1} />
                        ))}
                    </List>
                </Collapse>
            ) : null}
            {divide ? <Divider /> : null}
        </>
    );
}

export default function ButtonMenu() {
    const intl = useIntl();
    const theme = useTheme();
    const language = useLanguage();
    const calendar = useCalendar();
    const classes = useStyles();

    const [menuElem, setMenuElem] = React.useState<null | HTMLElement>(null);
    const open = Boolean(menuElem);

    const openMenu = React.useCallback((event: ElementClickEvent<HTMLButtonElement>) => setMenuElem(event.currentTarget), []);

    const closeMenu = React.useCallback(() => setMenuElem(null), []);

    const SIGN_OUT = useSignOut({ onSuccess: closeMenu });

    const menuBase = React.useMemo<MenuItemProps[]>(
        () => [
            {
                id: 'Theme',
                title: intl.formatMessage(themeMessage['module.theme.theme']),
                icon: <PaletteIcon />,
                divide: true,
                subMenu: [
                    {
                        id: 'Theme-Dark',
                        title: intl.formatMessage(themeMessage['module.theme.theme.dark']),
                        icon: <DarkModeIcon />,
                        onClick: () => theme.toggleTheme('dark'),
                    },
                    {
                        id: 'Theme-Light',
                        title: intl.formatMessage(themeMessage['module.theme.theme.light']),
                        icon: <LightModeIcon />,
                        onClick: () => theme.toggleTheme('light'),
                    },
                ],
            },
            {
                id: 'Language',
                title: intl.formatMessage(langMessage['module.language.lang']),
                icon: <TranslateIcon />,
                divide: true,
                subMenu: [
                    {
                        id: 'Language-Vi',
                        title: intl.formatMessage(langMessage['module.language.lang.vi']),
                        icon: <span className={classes.flagIcon}>🇻🇳</span>,
                        onClick: () => language.toggleLanguage('vi'),
                    },
                    {
                        id: 'Language-En',
                        title: intl.formatMessage(langMessage['module.language.lang.en']),
                        icon: <span className={classes.flagIcon}>🇬🇧</span>,
                        onClick: () => language.toggleLanguage('en'),
                    },
                ],
            },
        ],
        [language.locale]
    );

    const menuAuth = React.useMemo<MenuItemProps[]>(() => {
        if (!SIGN_OUT.isAuth) {
            return emptyArray;
        }
        return [
            {
                id: 'Calendar',
                title: intl.formatMessage(calendarMessage['module.calendar.setting.display']),
                icon: <CalendarMonthIcon />,
                divide: true,
                subMenu: [
                    {
                        id: 'default',
                        title: intl.formatMessage(calendarMessage['module.calendar.setting.display.default']),
                        onClick: () => calendar.toggleDisplay('sun'),
                    },
                    {
                        id: 'mon',
                        title: intl.formatMessage(calendarMessage['module.calendar.setting.display.mon']),
                        onClick: () => calendar.toggleDisplay('mon'),
                    },
                    {
                        id: 'sat',
                        title: intl.formatMessage(calendarMessage['module.calendar.setting.display.sat']),
                        onClick: () => calendar.toggleDisplay('sat'),
                    },
                ],
            },
        ];
    }, [language.locale, SIGN_OUT.isAuth]);

    const menuSignOut = React.useMemo<MenuItemProps[]>(() => {
        if (!SIGN_OUT.isAuth) {
            return emptyArray;
        }
        return [
            {
                id: 'sign-out',
                title: intl.formatMessage(authMessage['module.auth.form.title.signout']),
                icon: <LogoutIcon />,
                onClick: () => SIGN_OUT.mutate({}),
                divide: true,
                loading: SIGN_OUT.isPending,
            },
        ];
    }, [language.locale, SIGN_OUT.isAuth, SIGN_OUT.isPending]);

    const menu = React.useMemo<MenuItemProps[]>(() => {
        return ([] as MenuItemProps[]).concat(menuBase, menuAuth, menuSignOut);
    }, [menuBase, menuAuth, menuSignOut]);

    return (
        <>
            <Tooltip title={intl.formatMessage(baseMessage['module.base.text.setting'])}>
                <Button
                    id="button-setting"
                    aria-controls={open ? 'menu-setting' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={openMenu}
                    className={classes.button}
                    variant="outlined">
                    <MenuIcon />
                </Button>
            </Tooltip>

            <Menu
                id="menu-setting"
                anchorEl={menuElem}
                open={open}
                onClose={closeMenu}
                className={classes.menuPaper}
                MenuListProps={{
                    'aria-labelledby': 'button-setting',
                }}>
                <List component="nav">
                    <Divider key="first-divide" />
                    {menu.map((item) => (
                        <MenuItem key={item?.id || item?.title} {...item} />
                    ))}
                </List>
            </Menu>
        </>
    );
}
