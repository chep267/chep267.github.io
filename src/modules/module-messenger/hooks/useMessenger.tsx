/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import * as React from 'react';

/** constants */
import { emptyObject, emptyFunction } from '@module-base/constants/defaultValue';

/** types */
import type { ComponentType } from 'react';
import type { MessengerContextProps } from '@module-messenger/models';

const messengerDataDefault: {
    ui: MessengerContextProps['ui'];
} = {
    ui: {
        openThreadInfo: true,
        drafts: emptyObject,
    },
};
const MessengerContext = React.createContext<MessengerContextProps>({
    ui: {
        openThreadInfo: true,
        drafts: emptyObject,
    },
    method: {
        setOpenThreadInfo: emptyFunction,
        setDrafts: emptyFunction,
    },
});

const useMessenger = () => React.useContext(MessengerContext);

function withMessenger<Props>(WrappedComponent: ComponentType<Props>) {
    return function EnhancedComponent(props: Props) {
        const messenger = useMessenger();
        return <WrappedComponent {...props} messenger={messenger} />;
    };
}

MessengerContext.displayName = 'MessengerContext';
// eslint-disable-next-line react-refresh/only-export-components
export { MessengerContext, useMessenger, withMessenger, messengerDataDefault };
