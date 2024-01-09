/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import * as React from 'react';

/** constants */
import { AuthContext } from '@module-auth/constants';

export const useAuth = () => React.useContext(AuthContext);
