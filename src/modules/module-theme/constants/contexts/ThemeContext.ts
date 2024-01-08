/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import * as React from 'react';

/** constants */
import { emptyFunction } from '@module-base/constants/defaulValue';
import { themeObject } from '@module-theme/constants/data';

/** types */
import type { ThemeContextProps } from '@module-theme/models';

export const ThemeContext = React.createContext<ThemeContextProps>({
    data: {
        mode: themeObject.light,
    },
    method: {
        setTheme: emptyFunction,
    },
});
ThemeContext.displayName = 'ThemeContext';
