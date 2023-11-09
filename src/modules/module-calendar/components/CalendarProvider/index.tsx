/**
 *
 * @author dong.nguyenthanh@powergatesoftware.com on 26/07/2023.
 *
 */

import * as React from 'react';

/** hooks */
import { CalendarContext } from '@module-calendar/hooks/useCalendar';

/** types */
import type { PropsWithChildren } from 'react';
import type { CalendarContextProps } from '@module-calendar/models';

function CalendarProvider(props: PropsWithChildren) {
    const { children } = props;

    const [display, setDisplay] = React.useState<CalendarContextProps['display']>('default');

    const toggleDisplay = React.useCallback<CalendarContextProps['toggleDisplay']>((value) => setDisplay(value), []);

    const store = React.useMemo<CalendarContextProps>(
        () => ({
            display,
            toggleDisplay,
        }),
        [display]
    );

    return <CalendarContext.Provider value={store}>{children}</CalendarContext.Provider>;
}

export default CalendarProvider;
