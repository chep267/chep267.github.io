/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

/** types */
import type { UIEvent, ReactNode } from 'react';
import type { TableRowProps } from '@mui/material';

type OrderType = 'asc' | 'desc';

interface TableBaseProps<T = unknown> {
    className?: string;

    data?: T[];
    onScroll?(event: UIEvent<HTMLDivElement>): void;
    onClickItem?(item: T): void;

    loading?: boolean;
    emptyText?: string;

    rows?: {
        id: string;
        label: ReactNode;
        isSort?: boolean;
        render(item: T, indexRow: number, indexCell: number): ReactNode;
    }[];
    orderType?: OrderType;
    orderBy?: string;
    onRequestSort?: (property: string) => void;

    tableRowProps?: TableRowProps;
}

type TableLoadingProps = Pick<TableBaseProps, 'loading' | 'emptyText'> & { empty?: boolean };

export type { OrderType, TableBaseProps, TableLoadingProps };
