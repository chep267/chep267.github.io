/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import * as React from 'react';
import classnames from 'classnames';

/** lib components */
import Tooltip from '@mui/material/Tooltip';
import Menu from '@mui/material/Menu';
import IconButton from '@mui/material/IconButton';

/** styles */
import useStyles from './styles';

/** types */
import type { ElementClickEvent, MenuBaseProps } from '@module-base/models';

const MenuBase = React.memo(function (props: MenuBaseProps) {
    const { iconButtonProps, tooltipProps, menuProps } = props;
    const classes = useStyles();

    const menuId = React.useId();
    const [menuElem, setMenuElem] = React.useState<null | HTMLElement>(null);
    const open = Boolean(menuElem);

    const openMenu = React.useCallback((event: ElementClickEvent<HTMLButtonElement>) => setMenuElem(event.currentTarget), []);

    const closeMenu = React.useCallback(() => setMenuElem(null), []);

    const renderChildren = () => {
        const { children, ...other } = tooltipProps;
        return (
            <Tooltip {...other}>
                <IconButton
                    {...iconButtonProps}
                    id={`button-${menuId}`}
                    aria-controls={open ? `menu-${menuId}` : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={openMenu}>
                    {children}
                </IconButton>
            </Tooltip>
        );
    };

    return (
        <div>
            {renderChildren()}
            <Menu
                {...menuProps}
                id={`menu-${menuId}`}
                className={classnames(classes.menu, menuProps?.className)}
                anchorEl={menuElem}
                open={open}
                onClose={closeMenu}
                MenuListProps={{
                    'aria-labelledby': `button-${menuId}`,
                }}>
                {menuProps?.children}
            </Menu>
        </div>
    );
});

MenuBase.displayName = 'MenuBase';
export default MenuBase;
