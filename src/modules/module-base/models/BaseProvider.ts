/**
 *
 * @author dong.nguyenthanh@powergatesoftware.com on 26/07/2023.
 *
 */

/** types */
import type { ReactNode } from 'react';
import type { AlertColor } from '@mui/material/Alert';

type BaseNotifyType = {
    open?: boolean;
    message?: ReactNode;
    mode?: AlertColor;
    close?: boolean;
    duration?: number;
};

type BaseContextProps = {
    notify: BaseNotifyType & {
        toggleNotify(notify?: BaseNotifyType): void;
    };
    sider: {
        open: boolean;
        toggleSider: (open?: boolean) => void;
    };
};

export type { BaseContextProps, BaseNotifyType };
