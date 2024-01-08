/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

/** types */
import type {
    FunctionComponent,
    PropsWithChildren,
    LazyExoticComponent,
    RefObject,
    SVGProps,
    ImgHTMLAttributes,
    ReactNode,
    UIEvent,
    ElementType,
    ErrorInfo,
} from 'react';
import type {
    TextFieldProps,
    ListProps,
    IconButtonProps,
    MenuProps,
    SelectProps,
    SxProps,
    TableRowProps,
    Theme,
    TooltipProps,
    SnackbarProps,
} from '@mui/material';
import type { ElementClickEvent } from './event.d.ts';

/** ErrorBoundary */
export type ErrorBoundaryProps = PropsWithChildren<{
    fallback?: FunctionComponent;
    isAutoReload?: boolean;
}>;
export type ErrorBoundaryStates = {
    hasError: boolean;
};
export type FallbackDefaultProps = {
    isAutoReload?: boolean;
};
export type { ErrorInfo };

/** IconBase */
export type IconSVGProps = SVGProps<SVGSVGElement>;
export type TypeIconBase = 'appLogo' | 'error' | 'notFound';
export interface IconBaseProps extends SVGProps<SVGSVGElement> {
    name: TypeIconBase;
    size?: number;
    ref?: ((instance: SVGSVGElement | null) => void) | RefObject<SVGSVGElement> | null;
}
export type TypeIcons = Readonly<Record<TypeIconBase, LazyExoticComponent<(props: IconBaseProps) => JSX.Element>>>;

/** ImageBase */
export type ImageBaseProps = ImgHTMLAttributes<HTMLImageElement>;

/** InputSearch */
export type InputSearchProps = Omit<TextFieldProps, 'value' | 'onChange'> & {
    timer?: number;
    onLoading?(loading: boolean): void;
    onChangeValue?(searchKey: string): void;
};

/** ListBase */
export interface ListBaseProps<T = unknown> extends ListProps {
    listRef?: ListProps['ref'];
    loading?: boolean;
    empty?: boolean;
    emptyText?: string;
    data?: T[];
    renderItem?(item: T, index: number): ReactNode;
}
export type ListLoadingProps = Pick<ListBaseProps, 'loading' | 'emptyText'> & { empty?: boolean };
export type NestedItemProps = {
    id: string;
    icon?: ReactNode;
    loading?: boolean;
    title?: ReactNode;
    divide?: 'top' | 'bottom' | 'top-bottom';
    subMenu?: NestedItemProps[];
    subIndex?: number;
    onClick?(event: ElementClickEvent<HTMLDivElement>, isExpand?: boolean): void;
};

/** MenuBase */
export type MenuBaseProps = PropsWithChildren<{
    mode?: 'button' | 'icon';
    menuProps?: Omit<MenuProps, 'open'>;
    tooltipProps?: TooltipProps;
    iconButtonProps?: Omit<IconButtonProps, 'onClick'>;
}>;

/** NotifyBoundary */
export type NotifyBoundaryProps = SnackbarProps;

/** PasswordField */
export type PasswordFieldProps = TextFieldProps & {
    setFocus?(): void;
};

/** TableBase */
type OrderType = 'asc' | 'desc';
export interface TableBaseProps<T = unknown> {
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
export type TableLoadingProps = Pick<TableBaseProps, 'loading' | 'emptyText'> & { empty?: boolean };
export type TableHeaderProps = Pick<TableBaseProps, 'rows' | 'orderBy' | 'orderType' | 'onRequestSort'>;
export type TableBodyProps = Pick<TableBaseProps, 'data' | 'onClickItem' | 'rows' | 'tableRowProps'>;

/** SelectBase */
export interface SelectBaseProps extends SelectProps {
    labelInValue?: string;
    menuItems?: { value: string | number; label: ReactNode }[];
    IconRightProps?: {
        disableClear?: boolean;
        sx?: SxProps<Theme>;
        Icon?: ElementType;
        onClick?(): void;
    };
}
