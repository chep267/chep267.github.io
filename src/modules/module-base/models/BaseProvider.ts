/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

/** types */
import type { ReactNode, Dispatch, SetStateAction } from 'react';
import type { AlertColor } from '@mui/material/Alert';
import type { MessageDescriptor } from '@formatjs/intl';

type BaseNotifyType = {
    open?: boolean;
    message?: ReactNode;
    intlMessage?: MessageDescriptor;
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
        toggleSider: Dispatch<SetStateAction<boolean>>;
    };
    messenger: {
        openThreadInfo: boolean;
        toggleThreadInfo: Dispatch<SetStateAction<boolean>>;
    };
};

export type { BaseContextProps, BaseNotifyType };
