/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import * as React from 'react';

/** constants */
import { emptyFunction } from '@module-base/constants';
import { themeObject } from '@module-theme/constants';

/** types */
import type { ThemeContextProps } from '@module-theme/models';

const ThemeContext = React.createContext<ThemeContextProps>({
    data: {
        mode: themeObject.light,
    },
    method: {
        setTheme: emptyFunction,
    },
});
ThemeContext.displayName = 'ThemeContext';

const useTheme = () => React.useContext(ThemeContext);

export { ThemeContext, useTheme };
