/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import * as React from 'react';

/** constants */
import { emptyFunction } from '@module-base/constants/defaultValue';

/** types */
import type { NotifyContextProps, TypeNotify } from '@module-base/models';

const defaultNotify = Object.freeze<TypeNotify>({
    open: false,
    message: '',
    mode: undefined,
    close: false,
    duration: undefined,
});

const NotifyContext = React.createContext<NotifyContextProps>({
    data: defaultNotify,
    method: {
        toggleNotify: emptyFunction,
    },
});
NotifyContext.displayName = 'NotifyContext';

const useNotify = () => React.useContext(NotifyContext);

export { NotifyContext, useNotify, defaultNotify };
