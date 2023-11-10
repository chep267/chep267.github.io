/**
 *
 * @author dong.nguyenthanh@powergatesoftware.com on 26/07/2023.
 *
 */
import * as React from 'react';
import { Route, Routes } from 'react-router-dom';

/** constants */
import { SCREEN } from '@module-global/constants/screen';

/** screens */
const CalendarScreen = React.lazy(() => import('./CalendarScreen'));
const CalendarInfoScreen = React.lazy(() => import('./CalendarInfoScreen'));

export default function CalendarRouter() {
    return (
        <React.Suspense fallback={null}>
            <Routes>
                <Route index element={<CalendarScreen />} />
                <Route path={SCREEN.CALENDAR_INFO} element={<CalendarInfoScreen />} />
            </Routes>
        </React.Suspense>
    );
}
