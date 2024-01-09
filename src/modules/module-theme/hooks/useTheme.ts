/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import * as React from 'react';

/** constants */
import { ThemeContext } from '@module-theme/constants';

export const useTheme = () => React.useContext(ThemeContext);
