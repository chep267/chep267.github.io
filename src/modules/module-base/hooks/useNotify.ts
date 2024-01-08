/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import * as React from 'react';

/** hooks */
import { NotifyContext } from '@module-base/constants';

export const useNotify = () => React.useContext(NotifyContext);
