/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

/** types */
import type { ReactNode } from 'react';
import type { ListProps } from '@mui/material/List';
import type { ElementClickEvent } from '@module-base/models/Event';

interface ListBaseProps<T = unknown> extends ListProps {
    listRef?: ListProps['ref'];
    loading?: boolean;
    empty?: boolean;
    emptyText?: string;
    data?: T[];
    renderItem?(item: T, index: number): ReactNode;
}

type ListLoadingProps = Pick<ListBaseProps, 'loading' | 'emptyText'> & { empty?: boolean };

type NestedItemProps = {
    id: string;
    icon?: ReactNode;
    loading?: boolean;
    title?: ReactNode;
    divide?: 'top' | 'bottom' | 'top-bottom';
    subMenu?: NestedItemProps[];
    subIndex?: number;
    onClick?(event: ElementClickEvent<HTMLDivElement>, isExpand?: boolean): void;
};

export type { ListBaseProps, ListLoadingProps, NestedItemProps };
