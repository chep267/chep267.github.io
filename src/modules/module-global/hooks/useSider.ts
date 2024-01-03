/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import * as React from 'react';

/** constants */
import { emptyFunction } from '@module-base/constants';

/** types */
import type { TypeSiderContext } from '@module-global/models';

export const SiderContext = React.createContext<TypeSiderContext>({
    data: {
        openSider: true,
    },
    method: {
        setOpenSider: emptyFunction,
    },
});
SiderContext.displayName = 'SiderContext';

export const useSider = () => React.useContext(SiderContext);
