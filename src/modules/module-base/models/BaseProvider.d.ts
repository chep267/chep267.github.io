/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

/** types */
import type { ReactNode, Dispatch, SetStateAction } from 'react';
import type { AlertColor } from '@mui/material/Alert';
import type { MessageDescriptor } from '@formatjs/intl';

type TypeBaseNotify = {
    open?: boolean;
    message?: ReactNode;
    intlMessage?: MessageDescriptor;
    mode?: AlertColor;
    close?: boolean;
    duration?: number;
};

type BaseContextProps = {
    notify: TypeBaseNotify & {
        toggleNotify(notify?: TypeBaseNotify): void;
    };
    sider: {
        open: boolean;
        toggleSider: Dispatch<SetStateAction<boolean>>;
    };
};

export type { BaseContextProps, TypeBaseNotify };
