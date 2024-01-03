/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

/** types */
import type { PropsWithChildren, ReactNode } from 'react';
import type { MessageDescriptor } from '@formatjs/intl';
import type { AlertColor } from '@mui/material/Alert';

/** useCountdown */
export type UseCountdownProps = {
    numberCountdown?: number /** thời gian đếm ngược */;
    timer?: number /**  khoảng đếm ngược */;
    isContinue?: boolean /** có  tiếp tục đếm ngược khi về 0 */;
    callback?(): void /** fn callback khi  đếm ngược khi về 0 */;
};

/** useNotify */
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

/** useListSearch */
type UseListSearchProps = {
    disableEventKey: boolean; // có tắt phím mũi tên không, mặc định là không
    total: number; // số phần tử
    indexSelect: number; // vị trí đang select, mặc định là chưa chọn
    indexHover: number; // ví trí đang hover, mặc định là chưa chọn
    idSelect: string; // id đang select, mặc định là chưa chọn
};
