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
import { AuthScreenPath } from '@module-auth/constants';

/** styles */
import useStyles from './styles';

/** lazy components */
const Particle = React.lazy(() => import('@module-base/components/Particles'));
const SignInForm = React.lazy(() => import('@module-auth/components/SignInForm'));
const RegisterForm = React.lazy(() => import('@module-auth/components/RegisterForm'));
const RecoverForm = React.lazy(() => import('@module-auth/components/RecoverForm'));

export default function SignInScreen() {
    const classes = useStyles();

    return (
        <Stack className={classes.layout}>
            <Stack className={classes.form}>
                <React.Suspense fallback={null}>
                    <Routes>
                        <Route path={AuthScreenPath.signin} element={<SignInForm />} />
                        <Route path={AuthScreenPath.register} element={<RegisterForm />} />
                        <Route path={AuthScreenPath.recover} element={<RecoverForm />} />
                        <Route path="*" element={<Navigate to={AuthScreenPath.signin} replace />} />
                    </Routes>
                </React.Suspense>
            </Stack>
            <React.Suspense fallback={null}>
                <Particle />
            </React.Suspense>
        </Stack>
    );
}
