/**
 *
 * @author dongntd267@gmail.com on 24/08/2023.
 *
 */

/** types */
import type { ReactNode } from 'react';
import type { DialogProps, DialogActionsProps, ButtonProps } from '@mui/material';
import type { CSSObject } from '@mui/styled-engine';
import type { LoadingButtonProps } from '@mui/lab/LoadingButton';

type DialogBaseProps = DialogProps & {
    titleText?: ReactNode;
    contentText?: ReactNode;
    closeIcon?: true | ReactNode;
    buttonProps?: {
        okText?: ReactNode;
        cancelText?: ReactNode;
        position?: CSSObject['justifyContent'];
        btnOkProps?: LoadingButtonProps;
        btnCancelProps?: ButtonProps;
        wrapProps?: DialogActionsProps;
    };
};

export type { DialogBaseProps };
