/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

/** types */
import type { PropsWithChildren } from 'react';
import type { MenuProps, TooltipProps, IconButtonProps } from '@mui/material';

interface MenuBaseProps extends PropsWithChildren {
    mode?: 'button' | 'icon';
    menuProps?: Omit<MenuProps, 'open'>;
    tooltipProps?: TooltipProps;
    iconButtonProps?: Omit<IconButtonProps, 'onClick'>;
}

export type { MenuBaseProps };
