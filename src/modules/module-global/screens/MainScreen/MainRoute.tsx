/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import * as React from 'react';

/** lib components */
import { Routes, Route, Navigate } from 'react-router-dom';
import { Box } from '@mui/material';

/** components */
import { SiderProvider, AppSider } from '@module-global/components';

/** constants */
import { ScreenPath } from '@module-global/constants';

/** styles */
import { useStyles } from './styles';

/** screens */
const NotFoundScreen = React.lazy(() => import('@module-base/screens/NotFoundScreen'));
const NewFeedScreen = React.lazy(() => import('@module-feed/screens/NewFeedScreen'));
const MessengerScreen = React.lazy(() => import('@module-messenger/screens'));
const CalendarScreen = React.lazy(() => import('@module-calendar/screens'));
const GameScreen = React.lazy(() => import('@module-game/screens'));

export default function MainRoute() {
    const classes = useStyles();

    return (
        <Box className={classes.mainBody} component="section">
            <SiderProvider>
                <AppSider />
            </SiderProvider>
            <Box className={classes.mainContent} component="main">
                <React.Suspense fallback={null}>
                    <Routes>
                        <Route path={ScreenPath.HOME} element={<Navigate to={ScreenPath.CALENDAR} />} />
                        <Route path={`${ScreenPath.FEED}/*`} element={<NewFeedScreen />} />
                        <Route path={`${ScreenPath.MESSENGER}/*`} element={<MessengerScreen />} />
                        <Route path={`${ScreenPath.CALENDAR}/*`} element={<CalendarScreen />} />
                        <Route path={`${ScreenPath.GAME}/*`} element={<GameScreen />} />
                        <Route path="*" element={<NotFoundScreen />} />
                    </Routes>
                </React.Suspense>
            </Box>
        </Box>
    );
}
