/**
 *
 * @author dong.nguyenthanh@powergatesoftware.com on 26/07/2023.
 *
 */

import * as React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Box } from '@mui/material';

/** components */
import StartLoading from '@module-base/components/StartLoading';
import AppHeader from '@module-global/components/AppHeader';
import AppMenu from '@module-global/components/AppMenu';

/** constants */
import { SCREEN } from '@module-global/constants/screen';

/** styles */
import useStyles from './styles';

/** screens */
const AuthRoute = React.lazy(() => import('@module-auth/screens/AuthRoute'));
const NotFoundScreen = React.lazy(() => import('@module-global/screens/NotFoundScreen'));
const NewFeedScreen = React.lazy(() => import('@module-feed/screens/NewFeedScreen'));
const MessengerScreen = React.lazy(() => import('@module-messenger/screens/MessengerScreen'));
const CalendarScreen = React.lazy(() => import('@module-calendar/screens/CalendarScreen'));

export default function MainScreen() {
    const classes = useStyles();

    function MainRoute() {
        return (
            <Box className={classes.mainBody}>
                <AppMenu />
                <Box className={classes.mainContent} component="main">
                    <React.Suspense fallback={null}>
                        <Routes>
                            <Route path={SCREEN.HOME} element={<Navigate to={SCREEN.MESSENGER} />} />
                            <Route path={SCREEN.FEED} element={<NewFeedScreen />} />
                            <Route path={SCREEN.MESSENGER} element={<MessengerScreen />} />
                            <Route path={SCREEN.CALENDAR} element={<CalendarScreen />} />
                            <Route path="*" element={<NotFoundScreen />} />
                        </Routes>
                    </React.Suspense>
                </Box>
            </Box>
        );
    }

    return (
        <Box className={classes.main}>
            <AppHeader />
            <BrowserRouter>
                <React.Suspense fallback={<StartLoading />}>
                    <Routes>
                        <Route
                            path="*"
                            element={
                                <AuthRoute>
                                    <MainRoute />
                                </AuthRoute>
                            }
                        />
                    </Routes>
                </React.Suspense>
            </BrowserRouter>
        </Box>
    );
}
