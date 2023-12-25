/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

/** types */
import type { BreadcrumbsProps } from '@mui/material/Breadcrumbs';

type BreadcrumbsBaseProps = BreadcrumbsProps & {
    arrayPath?: { path?: string; hidden?: boolean; title?: string }[];
};

export type { BreadcrumbsBaseProps };
