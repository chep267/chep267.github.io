/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import * as React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

/** lib components */
import { Stack } from '@mui/material';

/** constants */
import { AUTH_SCREEN } from '@module-auth/constants/screen';

/** styles */
import useStyles from './styles';

/** lazy components */
const Particle = React.lazy(() => import('@module-base/components/Particles'));
const SignInForm = React.lazy(() => import('@module-auth/components/SignInForm'));
const RegisterForm = React.lazy(() => import('@module-auth/components/RegisterForm'));
const RecoverForm = React.lazy(() => import('@module-auth/components/RecoverForm'));

function SignInScreen() {
    const classes = useStyles();

    return (
        <Stack className={classes.layout}>
            <Stack className={classes.form}>
                <React.Suspense fallback={null}>
                    <Routes>
                        <Route path={AUTH_SCREEN.SIGN_IN} element={<SignInForm />} />
                        <Route path={AUTH_SCREEN.REGISTER} element={<RegisterForm />} />
                        <Route path={AUTH_SCREEN.RECOVER} element={<RecoverForm />} />
                        <Route path="*" element={<Navigate to={AUTH_SCREEN.SIGN_IN} replace />} />
                    </Routes>
                </React.Suspense>
            </Stack>
            <React.Suspense fallback={null}>
                <Particle />
            </React.Suspense>
        </Stack>
    );
}

export default SignInScreen;
