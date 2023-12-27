/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import * as React from 'react';

/** components */
import ErrorBoundary from '@module-base/components/ErrorBoundary';

/** utils */
import { NotifyContext, defaultNotify } from '@module-base/hooks/useNotify';

/** types */
import type { PropsWithChildren } from 'react';
import type { NotifyContextProps, TypeNotify } from '@module-base/models';

export default function NotifyProvider(props: PropsWithChildren) {
    const { children } = props;

    const [notify, setNotify] = React.useState<TypeNotify>(defaultNotify);

    const toggleNotify = React.useCallback((options: TypeNotify = defaultNotify) => setNotify(options), []);

    const store = React.useMemo<NotifyContextProps>(
        () => ({
            data: notify,
            method: {
                toggleNotify,
            },
        }),
        [notify]
    );

    return (
        <NotifyContext.Provider value={store}>
            <ErrorBoundary isAutoReload>{children}</ErrorBoundary>
        </NotifyContext.Provider>
    );
}
