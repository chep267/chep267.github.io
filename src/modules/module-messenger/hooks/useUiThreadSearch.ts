/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import * as React from 'react';

/** constants */
import { ThreadSearchContext } from '@module-messenger/constants';

export const useUiThreadSearch = () => React.useContext(ThreadSearchContext);
