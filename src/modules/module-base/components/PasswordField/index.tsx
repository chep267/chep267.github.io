/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import * as React from 'react';

/** lib components */
import { TextField, InputAdornment, IconButton } from '@mui/material';

/** icons */
import { Visibility as VisibilityIcon, VisibilityOff as VisibilityOffIcon } from '@mui/icons-material';

/** types */
import type { PasswordFieldProps } from '@module-base/models';

export default function PasswordField(props: PasswordFieldProps) {
    const { InputProps, setFocus, ...inputProps } = props;
    const [showPassword, setShowPassword] = React.useState(-1);

    React.useEffect(() => {
        if (showPassword > -1) {
            setFocus?.();
        }
    }, [showPassword]);

    const toggleShowPassword = React.useCallback(() => {
        setShowPassword((prev) => (prev === 1 ? 0 : 1));
    }, []);

    const endAdornment = React.useMemo(() => {
        return (
            InputProps?.endAdornment || (
                <InputAdornment position="end">
                    <IconButton onClick={toggleShowPassword}>
                        {showPassword === 1 ? <VisibilityOffIcon /> : <VisibilityIcon />}
                    </IconButton>
                </InputAdornment>
            )
        );
    }, [InputProps?.endAdornment, showPassword]);

    return (
        <TextField
            {...inputProps}
            InputProps={{
                ...InputProps,
                endAdornment,
            }}
            type={showPassword === 1 ? 'text' : 'password'}
        />
    );
}
