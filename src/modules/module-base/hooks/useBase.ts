/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import * as React from 'react';

/** constants */
import { emptyFunction } from '@module-base/constants/defaultValue';

/** types */
import type { BaseContextProps } from '@module-base/models';

const defaultNotify = Object.freeze({ open: false, message: '', mode: undefined, close: false, duration: undefined });

const BaseContext = React.createContext<BaseContextProps>({
    notify: { ...defaultNotify, toggleNotify: emptyFunction },
    sider: {
        open: true,
        toggleSider: emptyFunction,
    },
});
BaseContext.displayName = 'BaseContext';

const useBase = () => React.useContext(BaseContext);

export { BaseContext, useBase, defaultNotify };
