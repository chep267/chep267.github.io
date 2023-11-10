/**
 *
 * @author dong.nguyenthanh@powergatesoftware.com on 26/07/2023.
 *
 */

import * as React from 'react';

/** types */
import type { ComponentType } from 'react';
import type { CalendarContextProps } from '@module-calendar/models';

const CalendarContext = React.createContext<CalendarContextProps>({
    display: 'sun',
    toggleDisplay: () => {},
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
export { CalendarContext, useCalendar, withCalendar };
