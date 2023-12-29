/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import * as React from 'react';

/** constants */
import { emptyFunction } from '@module-base/constants/defaultValue';

/** types */
import type { TypeBaseContext } from '@module-base/models';

export const BaseContext = React.createContext<TypeBaseContext>({
    data: {
        openSider: true,
    },
    method: {
        setOpenSider: emptyFunction,
    },
});
BaseContext.displayName = 'BaseContext';

export const useBase = () => React.useContext(BaseContext);
