/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import * as React from 'react';

/** constants */
import { emptyArray, emptyObject } from '@module-base/constants/defaultValue';

/** types */
import type { ComponentType } from 'react';
import type { MessengerContextProps } from '@module-messenger/models';

const messengerDataDefault: MessengerContextProps['data'] = {
    threadIds: emptyArray,
    threads: emptyObject,
    loadingThread: false,
};
const MessengerContext = React.createContext<MessengerContextProps>({
    data: messengerDataDefault,
    method: {
        getThread: () => undefined,
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
