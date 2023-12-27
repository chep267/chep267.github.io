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
    tooltipProps: TooltipProps;
    iconButtonProps?: IconButtonProps;
}

export type { MenuBaseProps };
