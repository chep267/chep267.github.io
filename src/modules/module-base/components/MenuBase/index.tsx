/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import * as React from 'react';
import classnames from 'classnames';

/** lib components */
import { Tooltip, Menu, IconButton } from '@mui/material';

/** constants */
import { emptyObject } from '@module-base/constants';

/** styles */
import useStyles from './styles';

/** types */
import type { ElementClickEvent, MenuBaseProps } from '@module-base/models';

const MenuBase = React.memo(function MenuBase(props: MenuBaseProps) {
    const { iconButtonProps, tooltipProps, menuProps } = props;
    const classes = useStyles();

    const menuId = React.useId();
    const [menuElem, setMenuElem] = React.useState<null | HTMLElement>(null);
    const open = Boolean(menuElem);

    const openMenu = React.useCallback((event: ElementClickEvent<HTMLButtonElement>) => setMenuElem(event.currentTarget), []);

    const closeMenu = React.useCallback(() => setMenuElem(null), []);

    const { children: tooltipChildren, title, ...tooltipOther } = tooltipProps ?? emptyObject;
    const { children: iconButtonChildren, ...iconButtonOther } = iconButtonProps ?? emptyObject;
    const { children: menuChildren, ...menuOther } = menuProps ?? emptyObject;
    return (
        <div>
            <Tooltip title={title} {...tooltipOther}>
                <IconButton
                    {...iconButtonOther}
                    id={`button-${menuId}`}
                    aria-controls={open ? `menu-${menuId}` : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={openMenu}>
                    {tooltipChildren || iconButtonChildren}
                </IconButton>
            </Tooltip>
            <Menu
                {...menuOther}
                id={`menu-${menuId}`}
                className={classnames(classes.menu, menuProps?.className)}
                anchorEl={menuElem}
                open={open}
                onClose={closeMenu}
                MenuListProps={{
                    'aria-labelledby': `button-${menuId}`,
                }}>
                {menuChildren}
            </Menu>
        </div>
    );
});

export default MenuBase;
