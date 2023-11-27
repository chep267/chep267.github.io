/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

/** types */
import type { ReactNode } from 'react';
import type { ListProps } from '@mui/material/List';

interface ListBaseProps<T = unknown> extends ListProps {
    loading?: boolean;
    empty?: boolean;
    emptyText?: string;
    data?: T[];
    renderItem?(item: T, index: number): ReactNode;
}

export type { ListBaseProps };
