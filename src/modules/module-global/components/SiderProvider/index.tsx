/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import * as React from 'react';

/** utils */
import { SiderContext } from '@module-global/constants';

/** types */
import type { SiderProviderProps, TypeSiderContext } from '@module-global/models';

export default function SiderProvider(props: SiderProviderProps) {
    const { children } = props;

    const [openSider, setOpenSider] = React.useState(true);

    const store = React.useMemo<TypeSiderContext>(
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

    return <SiderContext.Provider value={store}>{children}</SiderContext.Provider>;
}
