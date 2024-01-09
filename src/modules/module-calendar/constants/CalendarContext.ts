/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import * as React from 'react';

/** constants */
import { emptyFunction } from '@module-base/constants';
import { today } from './today.ts';

/** types */
import type { CalendarContextProps } from '@module-calendar/models';

export const CalendarContext = React.createContext<CalendarContextProps>({
    data: {
        display: 'sun',
        time: today,
        isOnlyMonth: false,
    },
    method: {
        setTime: emptyFunction,
        setDisplay: emptyFunction,
        setIsOnlyMonth: emptyFunction,
        isWeekend: () => false,
        isToday: () => false,
    },
});
CalendarContext.displayName = 'CalendarContext';
