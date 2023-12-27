/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import * as React from 'react';

/** lib components */
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Box } from '@mui/material';

/** components */
import StartLoading from '@module-base/components/StartLoading';
import AppHeader from '@module-global/components/AppHeader';
import AppSider from '@module-global/components/AppSider';

/** constants */
import { SCREEN } from '@module-global/constants/screen';

/** styles */
import useStyles from './styles';

/** screens */
const AuthRoute = React.lazy(() => import('@module-auth/screens/AuthRoute'));
const NotFoundScreen = React.lazy(() => import('@module-base/screens/NotFoundScreen'));
const NewFeedScreen = React.lazy(() => import('@module-feed/screens/NewFeedScreen'));
const MessengerScreen = React.lazy(() => import('@module-messenger/screens'));
const CalendarScreen = React.lazy(() => import('@module-calendar/screens'));
const GameScreen = React.lazy(() => import('@module-game/screens'));

function MainRoute() {
    const classes = useStyles();

    const renderRouter = React.useMemo(() => {
        return (
            <React.Suspense fallback={null}>
                <Routes>
                    <Route path={SCREEN.HOME} element={<Navigate to={SCREEN.CALENDAR} />} />
                    <Route path={`${SCREEN.FEED}/*`} element={<NewFeedScreen />} />
                    <Route path={`${SCREEN.MESSENGER}/*`} element={<MessengerScreen />} />
                    <Route path={`${SCREEN.CALENDAR}/*`} element={<CalendarScreen />} />
                    <Route path={`${SCREEN.GAME}/*`} element={<GameScreen />} />
                    <Route path="*" element={<NotFoundScreen />} />
                </Routes>
            </React.Suspense>
        );
    }, []);

    return (
        <Box className={classes.mainBody} component="section">
            <AppSider />
            <Box className={classes.mainContent} component="main">
                {renderRouter}
            </Box>
        </Box>
    );
}
export default function MainScreen() {
    const classes = useStyles();

    return (
        <BrowserRouter>
            <Box className={classes.main}>
                <AppHeader />
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
            </Box>
        </BrowserRouter>
    );
}
