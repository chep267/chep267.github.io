/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import * as React from 'react';
import dayjs from 'dayjs';

/** constants */
import { emptyFunction } from '@module-base/constants/defaultValue';

/** types */
import type { ComponentType } from 'react';
import type { CalendarContextProps } from '@module-calendar/models';

const today = dayjs();
const CalendarContext = React.createContext<CalendarContextProps>({
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

const useCalendar = () => React.useContext(CalendarContext);

function withCalendar<Props>(WrappedComponent: ComponentType<Props>) {
    return function EnhancedComponent(props: Props) {
        const language = useCalendar();
        return <WrappedComponent {...props} useCalendar={language} />;
    };
}

CalendarContext.displayName = 'CalendarContext';
// eslint-disable-next-line react-refresh/only-export-components
export { CalendarContext, useCalendar, withCalendar, today };
