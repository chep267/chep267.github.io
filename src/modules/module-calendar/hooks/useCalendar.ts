/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import * as React from 'react';

/** constants */
import { CalendarContext } from './CalendarContext';

export const useCalendar = () => React.useContext(CalendarContext);
