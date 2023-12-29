/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

/** types */
import type { ReactNode } from 'react';

export interface TypeAppItem {
    path: string;
    name: ReactNode;
    icon: ReactNode;
    onClick(): void;
}

export interface ListAppProps {
    isTooltip: boolean;
}

export interface AppItemProps {
    item: TypeAppItem;
    isSelected: boolean;
    isTooltip: boolean;
}
