/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import * as React from 'react';

/** constants */
import { emptyArray, emptyObject, emptyFunction } from '@module-base/constants/defaultValue';

/** types */
import type { ComponentType } from 'react';
import type { MessengerContextProps } from '@module-messenger/models';

const messengerDataDefault: {
    ui: MessengerContextProps['ui'];
    data: MessengerContextProps['data'];
} = {
    ui: {
        openThreadInfo: true,
        drafts: emptyObject,
        loadingThread: true,
        loadingMessage: true,
    },
    data: {
        threadIds: emptyArray,
        threads: emptyObject,
        allMessages: emptyObject,
    },
};
const MessengerContext = React.createContext<MessengerContextProps>({
    ui: messengerDataDefault.ui,
    data: messengerDataDefault.data,
    method: {
        setOpenThreadInfo: emptyFunction,
        setDrafts: emptyFunction,
    },
});

const useMessenger = () => React.useContext(MessengerContext);

function withMessenger<Props>(WrappedComponent: ComponentType<Props>) {
    return function EnhancedComponent(props: Props) {
        const language = useMessenger();
        return <WrappedComponent {...props} useMessenger={language} />;
    };
}

MessengerContext.displayName = 'MessengerContext';
// eslint-disable-next-line react-refresh/only-export-components
export { MessengerContext, useMessenger, withMessenger, messengerDataDefault };
