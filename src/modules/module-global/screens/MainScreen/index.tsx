/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import * as React from 'react';

/** lib components */
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';

/** components */
import { StartLoading } from '@module-base/components';
import { AppHeader } from '@module-global/components';

/** styles */
import { useStyles } from './styles';

/** screens */
const AuthRoute = React.lazy(() => import('@module-auth/screens/AuthRoute'));
const MainRoute = React.lazy(() => import('./MainRoute'));

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
