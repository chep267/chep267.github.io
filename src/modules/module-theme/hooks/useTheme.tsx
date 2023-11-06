/**
 *
 * @author dong.nguyenthanh@powergatesoftware.com on 26/07/2023.
 *
 */

import * as React from 'react';

/** utils */
import { themeObject } from '@module-theme/constants/themeObject';

/** types */
import type { ComponentType } from 'react';
import type { ThemeContextProps } from '@module-theme/models';

const ThemeContext = React.createContext<ThemeContextProps>({
    mode: themeObject.light,
    toggleTheme: () => null,
});

const useTheme = () => React.useContext(ThemeContext);

function withTheme<Props>(WrappedComponent: ComponentType<Props>) {
    return function EnhancedComponent(props: Props) {
        const theme = useTheme();
        return <WrappedComponent {...props} theme={theme} />;
    };
}

ThemeContext.displayName = 'ThemeContext';
// eslint-disable-next-line react-refresh/only-export-components
export { ThemeContext, useTheme, withTheme };
