/**
 *
 * @author dong.nguyenthanh@powergatesoftware.com on 26/07/2023.
 *
 */

/** types */
import type { ReactNode } from 'react';
import type { ButtonProps } from '@mui/material/Button';
import type { DialogBaseProps } from '@module-base/models/DialogBase';

type ButtonOpenDialogProps = ButtonProps & {
    defaultOpen?: boolean;
    loading?: boolean;
    dialogProps?: Partial<DialogBaseProps>;
    children?: ReactNode;
    timer?: number;
};

export type { ButtonOpenDialogProps };
