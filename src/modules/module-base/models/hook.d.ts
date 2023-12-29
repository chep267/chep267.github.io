/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

/** types */
import type { Dispatch, SetStateAction, PropsWithChildren, ReactNode } from 'react';
import type { MessageDescriptor } from '@formatjs/intl';
import type { AlertColor } from '@mui/material/Alert';

/** use base */
export type BaseProviderProps = PropsWithChildren;

export type TypeBaseContext = {
    data: {
        openSider: boolean;
    };
    method: {
        setOpenSider: Dispatch<SetStateAction<boolean>>;
    };
};

/** use countdown */
export type TypeUseCountdown = {
    numberCountdown?: number /** thời gian đếm ngược */;
    timer?: number /**  khoảng đếm ngược */;
    isContinue?: boolean /** có  tiếp tục đếm ngược khi về 0 */;
    callback?(): void /** fn callback khi  đếm ngược khi về 0 */;
};

/** use notify */
export type NotifyProviderProps = PropsWithChildren;

export type TypeNotify = {
    open?: boolean;
    message?: ReactNode;
    intlMessage?: MessageDescriptor;
    mode?: AlertColor;
    close?: boolean;
    duration?: number;
};

export type TypeNotifyContext = {
    data: TypeNotify;
    method: {
        toggleNotify(notify?: TypeNotify): void;
    };
};
