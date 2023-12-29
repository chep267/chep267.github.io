/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import * as React from 'react';

/** utils */
import { BaseContext } from '@module-base/hooks/useBase';

/** types */
import type { BaseProviderProps, TypeBaseContext } from '@module-base/models';

export default function BaseProvider(props: BaseProviderProps) {
    const { children } = props;

    const [openSider, setOpenSider] = React.useState(true);

    const store = React.useMemo<TypeBaseContext>(
        () => ({
            data: {
                openSider,
            },
            method: {
                setOpenSider,
            },
        }),
        [openSider]
    );

    return <BaseContext.Provider value={store}>{children}</BaseContext.Provider>;
}
