/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import * as React from 'react';

/** utils */
import { BaseContext } from '@module-base/hooks/useBase';

/** types */
import type { PropsWithChildren } from 'react';
import type { BaseContextProps } from '@module-base/models';

function BaseProvider(props: PropsWithChildren) {
    const { children } = props;

    const [openSider, setOpenSider] = React.useState(true);

    const store = React.useMemo<BaseContextProps>(
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

export default BaseProvider;
