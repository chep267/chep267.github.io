/**
 *
 * @author dong.nguyenthanh@powergatesoftware.com on 26/07/2023.
 *
 */

/** types */
import type { UIEvent, ReactNode } from 'react';
import type { SxProps, Theme, TableRowProps } from '@mui/material';

type OrderType = 'asc' | 'desc';

interface TableBaseProps<T = unknown> {
    sx?: SxProps<Theme>;
    className?: string;

    data?: T[];
    onScroll?(event: UIEvent<HTMLDivElement>): void;
    onClickItem?(item: T): void;

    loading?: boolean;
    emptyText?: string;

    rows?: {
        id: string;
        label: ReactNode;
        disableSort?: boolean;
        render(item: T, indexRow: number, indexCell: number): ReactNode;
    }[];
    orderType?: OrderType;
    orderBy?: string;
    onRequestSort?: (property: string) => void;

    tableRowProps?: TableRowProps;
}

export type { OrderType, TableBaseProps };
