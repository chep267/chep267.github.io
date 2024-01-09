/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */
import * as React from 'react';
import { Route, Routes } from 'react-router-dom';

/** constants */
import { ScreenPath } from '@module-global/constants';

/** screens */
const NotFoundScreen = React.lazy(() => import('@module-base/screens/NotFoundScreen'));
const CalendarScreen = React.lazy(() => import('./CalendarScreen'));
const CalendarInfoScreen = React.lazy(() => import('./CalendarInfoScreen'));

export default function CalendarRouter() {
    return (
        <React.Suspense fallback={null}>
            <Routes>
                <Route index element={<CalendarScreen />} />
                <Route path={ScreenPath.CALENDAR_INFO} element={<CalendarInfoScreen />} />
                <Route path="*" element={<NotFoundScreen />} />
            </Routes>
        </React.Suspense>
    );
}
