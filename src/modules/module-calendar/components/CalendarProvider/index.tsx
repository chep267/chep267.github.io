/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import * as React from 'react';

/** lib components */
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

/** hooks */
import { useLanguage } from '@module-language/hooks/useLanguage';
import { CalendarContext, today } from '@module-calendar/hooks/useCalendar';

/** types */
import type { PropsWithChildren } from 'react';
import type { CalendarContextProps } from '@module-calendar/models';

function CalendarProvider(props: PropsWithChildren) {
    const { children } = props;
    const { locale } = useLanguage();

    const [display, setDisplay] = React.useState<CalendarContextProps['data']['display']>('sun');
    const [time, setTime] = React.useState<CalendarContextProps['data']['time']>(today);

    const isToday = React.useCallback((timer: CalendarContextProps['data']['time']) => {
        return timer.year() === today.year() && timer.month() === today.month() && timer.date() === today.date();
    }, []);

    const store = React.useMemo<CalendarContextProps>(
        () => ({
            data: {
                display,
                time,
                isToday: isToday(time),
            },
            method: {
                setDisplay,
                setTime,
            },
        }),
        [display, time]
    );

    return (
        <CalendarContext.Provider value={store}>
            <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={locale}>
                {children}
            </LocalizationProvider>
        </CalendarContext.Provider>
    );
}

export default CalendarProvider;