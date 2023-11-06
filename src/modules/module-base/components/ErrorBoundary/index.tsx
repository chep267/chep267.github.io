/**
 *
 * @author dong.nguyenthanh@powergatesoftware.com on 26/07/2023.
 *
 */

import * as React from 'react';

/** types */
import type { PropsWithChildren, FunctionComponent, ErrorInfo } from 'react';

type Props = PropsWithChildren<{
    fallback?: FunctionComponent;
    isAutoReload?: boolean;
}>;

type States = {
    hasError: boolean;
};

/** components */
const FallbackDefault = React.lazy(() => import('./FallbackDefault'));
const NotifyBoundary = React.lazy(() => import('@module-base/components/NotifyBoundary'));

class ErrorBoundary extends React.Component<Props, States> {
    constructor(props: Props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        // You can also log the error to an error reporting service
        // logErrorToMyService(error, errorInfo);
        console.log('App error: ', error, '\n--\n', errorInfo, '\n--');
    }

    render() {
        const { children, fallback: FallBack = FallbackDefault, isAutoReload = true } = this.props;
        const { hasError } = this.state;

        return (
            <React.Suspense fallback={null}>
                {hasError ? <FallBack isAutoReload={isAutoReload} /> : children}
                <NotifyBoundary />
            </React.Suspense>
        );
    }
}

export default ErrorBoundary;
