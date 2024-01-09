/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import * as React from 'react';
import { useIntl } from 'react-intl';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, Controller } from 'react-hook-form';

/** lib components */
import { Link } from 'react-router-dom';
import { Paper, Stack, Typography, TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab';

/** components */
import { PasswordField } from '@module-base/components';

/** constants */
import { AuthScreenPath } from '@module-auth/constants';

/** utils */
import { authMessage, authFormSchema } from '@module-auth/utils';

/** hooks */
import { useRegister } from '@module-auth/hooks';

/** styles */
import useStyles from '@module-auth/components/SignInForm/styles';

/** types */
import type { AuthApiProps, FormAuthDataType } from '@module-auth/models';

export default function RegisterForm() {
    const { formatMessage } = useIntl();
    const REGISTER = useRegister();
    const classes = useStyles();

    const {
        handleSubmit,
        control,
        formState: { errors },
        setFocus,
    } = useForm<FormAuthDataType>({
        defaultValues: {
            email: '',
            password: '',
        },
        mode: 'onSubmit',
        resolver: yupResolver(authFormSchema),
    });

    const onSubmit = React.useCallback((data: AuthApiProps['Register']['Payload']) => REGISTER.mutate(data), []);

    return (
        <>
            <Typography variant="h3" className={classes.title}>
                {formatMessage(authMessage['module.auth.form.title.register'])}
            </Typography>

            <Paper className={classes.form} component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
                <Controller
                    name="email"
                    control={control}
                    render={({ field }) => {
                        const error = Boolean(errors.email);
                        const errorMessage = errors.email?.message as keyof typeof authMessage;
                        return (
                            <TextField
                                {...field}
                                type="email"
                                label={formatMessage(authMessage['module.auth.form.input.label.email'])}
                                variant="outlined"
                                spellCheck={false}
                                fullWidth
                                autoComplete="email"
                                autoFocus // eslint-disable-line jsx-a11y/no-autofocus
                                error={error}
                                helperText={errorMessage && formatMessage(authMessage[errorMessage])}
                            />
                        );
                    }}
                />
                <Controller
                    name="password"
                    control={control}
                    render={({ field: { ref, ...field } }) => {
                        const error = Boolean(errors.password);
                        const errorMessage = errors.password?.message as keyof typeof authMessage;
                        return (
                            <PasswordField
                                {...field}
                                inputRef={ref}
                                label={formatMessage(authMessage['module.auth.form.input.label.password'])}
                                variant="outlined"
                                spellCheck={false}
                                fullWidth
                                autoComplete="password"
                                error={error}
                                helperText={errorMessage && formatMessage(authMessage[errorMessage])}
                                setFocus={() => setFocus('password')}
                            />
                        );
                    }}
                />

                <Stack className={classes.link}>
                    <Link to={AuthScreenPath.signin} replace>
                        {formatMessage(authMessage['module.auth.form.title.signin'])}
                    </Link>
                    <Typography variant="h6" color="primary.main">
                        &nbsp;/&nbsp;
                    </Typography>
                    <Link to={AuthScreenPath.recover} replace>
                        {formatMessage(authMessage['module.auth.form.title.recover'])}
                    </Link>
                </Stack>

                <LoadingButton
                    type="submit"
                    loading={REGISTER.isPending}
                    size="large"
                    variant="contained"
                    fullWidth
                    className={classes.btnSubmit}>
                    {formatMessage(authMessage['module.auth.form.button.submit.register'])}
                </LoadingButton>
            </Paper>
        </>
    );
}
