/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import * as React from 'react';

/** constants */
import { emptyFunction } from '@module-base/constants/defaultValue';

/** types */
import type { TypeNotifyContext, TypeNotify } from '@module-base/models';

export const defaultNotify = Object.freeze<TypeNotify>({
    open: false,
    message: '',
    mode: undefined,
    close: false,
    duration: undefined,
});

export const NotifyContext = React.createContext<TypeNotifyContext>({
    data: defaultNotify,
    method: {
        toggleNotify: emptyFunction,
    },
});
NotifyContext.displayName = 'NotifyContext';

export const useNotify = () => React.useContext(NotifyContext);
