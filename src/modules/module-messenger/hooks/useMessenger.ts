/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import * as React from 'react';

/** constants */
import { emptyObject, emptyFunction } from '@module-base/constants';

/** types */
import type { MessengerContextProps } from '@module-messenger/models';

const MessengerContext = React.createContext<MessengerContextProps>({
    ui: {
        openThreadInfo: true,
        drafts: emptyObject,
    },
    method: {
        setOpenThreadInfo: emptyFunction,
        setText: emptyFunction,
        setFiles: emptyFunction,
        removeFiles: emptyFunction,
        setEmptyThread: emptyFunction,
    },
});
MessengerContext.displayName = 'MessengerContext';

const useMessenger = () => React.useContext(MessengerContext);

export { MessengerContext, useMessenger };
