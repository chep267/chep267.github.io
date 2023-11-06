/**
 *
 * @author dong.nguyenthanh@powergatesoftware.com on 24/08/2023.
 *
 */

/** types */
import type { ReactNode, ElementType } from 'react';
import type { SxProps, Theme, SelectProps } from '@mui/material';

type SelectBaseProps = SelectProps & {
    labelInValue?: string;
    menuItems?: { value: string | number; label: ReactNode }[];
    IconRightProps?: {
        disableClear?: boolean;
        sx?: SxProps<Theme>;
        Icon?: ElementType;
        onClick?(): void;
    };
};

export type { SelectBaseProps };
