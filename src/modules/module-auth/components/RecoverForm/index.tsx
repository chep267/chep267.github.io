/**
 *
 * @author dong.nguyenthanh@powergatesoftware.com on 26/07/2023.
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

/** constants */
import { emailLocalKey } from '@module-base/constants/localStoreKey';
import { AUTH_SCREEN } from '@module-auth/constants/screen';

/** utils */
import { Decrypt } from '@module-base/utils/security';
import { localStorageBase } from '@module-base/utils/storages';
import { authMessage } from '@module-auth/utils/messages';
import { authFormSchema } from '@module-auth/utils/helpers/authFormSchema';

/** hooks */
import { useRecover } from '@module-auth/hooks/useRecover';

/** styles */
import useStyles from '@module-auth/components/SignInForm/styles';

/** types */
import type { AuthApiProps, FormAuthDataType } from '@module-auth/models';

export default function RecoverForm() {
    const { formatMessage } = useIntl();
    const RECOVER = useRecover();
    const classes = useStyles();

    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<FormAuthDataType>({
        defaultValues: {
            email: Decrypt(localStorageBase.get(emailLocalKey)),
        },
        mode: 'onSubmit',
        resolver: yupResolver(authFormSchema),
    });

    const onSubmit = React.useCallback((data: AuthApiProps['Recover']['Payload']) => RECOVER.mutate(data), []);

    return (
        <>
            <Typography variant="h3" className={classes.title}>
                {formatMessage(authMessage['module.auth.form.title.recover'])}
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
                                autoFocus // eslint-disable-line jsx-a11y/no-autofocus
                                error={error}
                                helperText={errorMessage && formatMessage(authMessage[errorMessage])}
                            />
                        );
                    }}
                />

                <Stack className={classes.link}>
                    <Link to={AUTH_SCREEN.SIGN_IN} replace>
                        {formatMessage(authMessage['module.auth.form.title.signin'])}
                    </Link>
                    <Typography variant="h6" color="primary.main">
                        &nbsp;/&nbsp;
                    </Typography>
                    <Link to={AUTH_SCREEN.RECOVER} replace>
                        {formatMessage(authMessage['module.auth.form.title.recover'])}
                    </Link>
                </Stack>

                <LoadingButton
                    type="submit"
                    loading={RECOVER.isPending}
                    size="large"
                    variant="contained"
                    fullWidth
                    className={classes.btnSubmit}>
                    {formatMessage(authMessage['module.auth.form.button.submit.recover'])}
                </LoadingButton>
            </Paper>
        </>
    );
}
