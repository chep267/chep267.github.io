/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import * as React from 'react';

/** lib components */
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';

/** icons */
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

/** types */
import type { TextFieldProps } from '@mui/material/TextField';

export default function PasswordField(props: TextFieldProps & { setFocus?(): void }) {
    const { InputProps, setFocus, ...inputProps } = props;
    const [showPassword, setShowPassword] = React.useState(false);

    React.useEffect(() => {
        setFocus?.();
    }, [showPassword]);

    const toggleShowPassword = React.useCallback(() => {
        setShowPassword((prev) => !prev);
    }, []);

    const endAdornment = React.useMemo(() => {
        return (
            InputProps?.endAdornment || (
                <InputAdornment position="end" style={{ cursor: 'pointer' }} onClick={toggleShowPassword}>
                    {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
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
            type={showPassword ? 'text' : 'password'}
        />
    );
}
