/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import * as React from 'react';
import { useIntl } from 'react-intl';

/** lib components */
import {
    Divider,
    Tooltip,
    Collapse,
    CircularProgress,
    Menu,
    List,
    ListItemButton,
    ListItemText,
    IconButton,
} from '@mui/material';

/** icons */
import { ExpandLess as ExpandLessIcon, ExpandMore as ExpandMoreIcon, MoreHoriz as MoreHorizIcon } from '@mui/icons-material';

/** constants */

/** utils */
import { messengerMessage } from '@module-messenger/utils/messages';

/** hooks */
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
    const { subIndex = 1, divide, loading, onClick, title = '', subMenu } = props;
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

    return (
        <>
            <ListItemButton onClick={toggleOpen}>
                {loading ? (
                    <CircularProgress size={26} className={classes.loadingIcon} />
                ) : (
                    <ListItemText primary={title} primaryTypographyProps={{ color: open ? 'primary' : undefined }} />
                )}
                {!hasSub ? null : open ? (
                    <ExpandLessIcon className={classes.menuIcon} color="primary" />
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

export default function OptionMessage() {
    const intl = useIntl();
    const LANGUAGE = useLanguage();
    const classes = useStyles();

    const [menuElem, setMenuElem] = React.useState<null | HTMLElement>(null);
    const open = Boolean(menuElem);

    const openMenu = React.useCallback((event: ElementClickEvent<HTMLButtonElement>) => setMenuElem(event.currentTarget), []);

    const closeMenu = React.useCallback(() => setMenuElem(null), []);

    const menu = React.useMemo<MenuItemProps[]>(
        () => [
            {
                id: 'reply',
                title: intl.formatMessage(messengerMessage['module.messenger.component.message.option.reply']),
                divide: true,
            },
            {
                id: 'forward',
                title: intl.formatMessage(messengerMessage['module.messenger.component.message.option.forward']),
                divide: true,
            },
            {
                id: 'copy',
                title: intl.formatMessage(messengerMessage['module.messenger.component.message.option.copy']),
                divide: true,
            },
            {
                id: 'revoke',
                title: intl.formatMessage(messengerMessage['module.messenger.component.message.option.revoke']),
                divide: true,
            },
            {
                id: 'delete',
                title: intl.formatMessage(messengerMessage['module.messenger.component.message.option.delete']),
                divide: true,
            },
        ],
        [LANGUAGE.data.locale]
    );

    return (
        <>
            <Tooltip
                title={intl.formatMessage(messengerMessage['module.messenger.component.message.option.tooltip'])}
                placement="top">
                <IconButton
                    id="button-option-message"
                    aria-controls={open ? 'menu-option-message' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={openMenu}>
                    <MoreHorizIcon color="primary" />
                </IconButton>
            </Tooltip>

            <Menu
                id="menu-option-message"
                anchorEl={menuElem}
                open={open}
                onClose={closeMenu}
                className={classes.menuPaper}
                MenuListProps={{
                    'aria-labelledby': 'button-option-message',
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
