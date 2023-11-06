/**
 *
 * @author dong.nguyenthanh@powergatesoftware.com on 26/07/2023.
 *
 */

import * as React from 'react';
import { useIntl } from 'react-intl';

/** mui components */
import Menu from '@mui/material/Menu';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Tooltip from '@mui/material/Tooltip';
import Collapse from '@mui/material/Collapse';
import CircularProgress from '@mui/material/CircularProgress';

/** mui icons */
import MenuIcon from '@mui/icons-material/Menu';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import TranslateIcon from '@mui/icons-material/Translate';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PaletteIcon from '@mui/icons-material/Palette';
import LogoutIcon from '@mui/icons-material/Logout';

/** utils */
import { baseMessage } from '@module-base/utils/messages';
import { themeMessage } from '@module-theme/utils/messages';
import { langMessage } from '@module-language/utils/messages';
import { authMessage } from '@module-auth/utils/messages';
import { useTheme } from '@module-theme/hooks/useTheme';
import { useSignOut } from '@module-auth/hooks/useSignOut';
import { useLanguage } from '@module-language/hooks/useLanguage';

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
    const { subIndex = 1, divide, loading, onClick, title, icon, subMenu } = props;
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

    const sxIcon = React.useMemo(() => ({ ml: subIndex * 2 }), [subIndex]);

    return (
        <>
            <ListItemButton onClick={toggleOpen}>
                {icon ? <ListItemIcon sx={sxIcon}>{icon}</ListItemIcon> : null}
                {loading ? (
                    <CircularProgress size={26} className={classes.loadingIcon} />
                ) : (
                    <ListItemText primary={title}></ListItemText>
                )}
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
    const SIGN_OUT = useSignOut();
    const classes = useStyles();

    const [menuElem, setMenuElem] = React.useState<null | HTMLElement>(null);
    const open = Boolean(menuElem);

    const openMenu = React.useCallback((event: ElementClickEvent<HTMLButtonElement>) => setMenuElem(event.currentTarget), []);

    const closeMenu = React.useCallback(() => setMenuElem(null), []);

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

    const menu = React.useMemo<MenuItemProps[]>(() => {
        let output = menuBase;
        if (SIGN_OUT.isAuth) {
            output = [
                ...output,
                {
                    id: 'sign-out',
                    title: intl.formatMessage(authMessage['module.auth.form.title.signout']),
                    icon: <LogoutIcon />,
                    onClick: () => SIGN_OUT.mutate({}),
                    divide: true,
                    loading: SIGN_OUT.isPending,
                },
            ];
        }
        return output;
    }, [SIGN_OUT.isAuth, menuBase, SIGN_OUT.isPending]);

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
