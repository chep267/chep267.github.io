/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import * as React from 'react';
import dayjs from 'dayjs';

/** constants */
import { emptyFunction } from '@module-base/constants/defaulValue';

/** types */
import type { CalendarContextProps } from '@module-calendar/models';

export const today = dayjs();

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
