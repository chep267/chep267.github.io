/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import * as React from 'react';

/** components */
import { ErrorBoundary } from '@module-base/components';

/** constants */
import { dataNotifyContextDefault } from '@module-base/constants/defaulValue';
import { NotifyContext } from '@module-base/constants/contexts';

/** types */
import type { TypeNotifyContext, TypeNotify, NotifyProviderProps } from '@module-base/models';

export default function NotifyProvider(props: NotifyProviderProps) {
    const { children } = props;

    const [notify, setNotify] = React.useState<TypeNotify>(dataNotifyContextDefault);

    const toggleNotify = React.useCallback((options: TypeNotify = dataNotifyContextDefault) => setNotify(options), []);

    const store = React.useMemo<TypeNotifyContext>(
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
