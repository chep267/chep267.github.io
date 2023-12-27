/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

/** types */
import type { ReactNode } from 'react';
import type { AlertColor } from '@mui/material/Alert';
import type { MessageDescriptor } from '@formatjs/intl';

type TypeNotify = {
    open?: boolean;
    message?: ReactNode;
    intlMessage?: MessageDescriptor;
    mode?: AlertColor;
    close?: boolean;
    duration?: number;
};

type NotifyContextProps = {
    data: TypeNotify;
    method: {
        toggleNotify(notify?: TypeNotify): void;
    };
};

export type { NotifyContextProps, TypeNotify };
