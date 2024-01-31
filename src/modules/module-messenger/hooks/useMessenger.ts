/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import * as React from 'react';
import { MessengerContext } from '../constants/MessengerContext.ts';

export const useMessenger = () => React.useContext(MessengerContext);
