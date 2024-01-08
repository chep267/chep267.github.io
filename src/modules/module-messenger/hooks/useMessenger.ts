/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import * as React from 'react';
import { MessengerContext } from './MessengerContext';

export const useMessenger = () => React.useContext(MessengerContext);
