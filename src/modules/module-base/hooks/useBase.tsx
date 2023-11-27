/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import * as React from 'react';

/** constants */
import { emptyFunction } from '@module-base/constants/defaultValue';

/** types */
import type { ComponentType } from 'react';
import type { BaseContextProps } from '@module-base/models';

const defaultNotify = Object.freeze({ open: false, message: '', mode: undefined, close: false, duration: undefined });

const BaseContext = React.createContext<BaseContextProps>({
    notify: { ...defaultNotify, toggleNotify: emptyFunction },
    sider: {
        open: true,
        toggleSider: emptyFunction,
    },
});

const useBase = () => React.useContext(BaseContext);

function withBase<Props>(WrappedComponent: ComponentType<Props>) {
    return function EnhancedComponent(props: Props) {
        const language = useBase();
        return <WrappedComponent {...props} useBase={language} />;
    };
}

BaseContext.displayName = 'BaseContext';
// eslint-disable-next-line react-refresh/only-export-components
export { defaultNotify, BaseContext, useBase, withBase };
