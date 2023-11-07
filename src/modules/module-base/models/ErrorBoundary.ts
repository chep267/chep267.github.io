/**
 *
 * @author dong.nguyenthanh@powergatesoftware.com on 26/07/2023.
 *
 */

/** types */
import type { FunctionComponent, PropsWithChildren } from 'react';

type ErrorBoundaryProps = PropsWithChildren<{
    fallback?: FunctionComponent;
    isAutoReload?: boolean;
}>;

type ErrorBoundaryStates = {
    hasError: boolean;
};

type FallbackDefaultProps = {
    isAutoReload: boolean;
};

export type { ErrorBoundaryProps, ErrorBoundaryStates, FallbackDefaultProps };
