/**
 *
 * @author dong.nguyenthanh@powergatesoftware.com on 26/07/2023.
 *
 */

import * as React from 'react';

/** lib components */
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';

/** icons */
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

/** utils */
import { focusInput } from '@module-base/utils/helpers/focusInput';

/** types */
import type { TextFieldProps } from '@mui/material/TextField';

const PasswordField = React.forwardRef((props: TextFieldProps, ref) => {
    const { InputProps, ...inputProps } = props;
    const inputRef = React.useRef<HTMLInputElement>(null);

    React.useImperativeHandle(
        ref,
        () => ({
            ...ref,
            ...inputRef,
        }),
        [inputRef]
    );

    const [showPassword, setShowPassword] = React.useState(false);

    const toggleShowPassword = React.useCallback(() => {
        setShowPassword((prev) => !prev);
        focusInput(inputRef.current);
    }, [inputRef]);

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
            inputRef={inputRef}
            type={showPassword ? 'text' : 'password'}
            InputProps={{
                ...InputProps,
                endAdornment,
            }}
            {...inputProps}
        />
    );
});

PasswordField.displayName = 'PasswordField';
export default PasswordField;
