/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import * as React from 'react';

/** constants */
import { dataNotifyContextDefault, emptyFunction } from '@module-base/constants/defaulValue';

/** types */
import type { TypeNotifyContext } from '@module-base/models';

export const NotifyContext = React.createContext<TypeNotifyContext>({
    data: dataNotifyContextDefault,
    method: {
        toggleNotify: emptyFunction,
    },
});

NotifyContext.displayName = 'NotifyContext';
