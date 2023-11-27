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
import ClearIcon from '@mui/icons-material/Clear';
import SearchIcon from '@mui/icons-material/Search';

/** constants */
import { TIMING_SEARCHING } from '@module-base/constants/defaultValue';

/** types */
import type { InputSearchProps, InputChangeEvent } from '@module-base/models';

const InputSearch = React.memo((props: InputSearchProps) => {
    const {
        timer = TIMING_SEARCHING,
        onChangeValue,
        onLoading,
        type = 'text',
        spellCheck = false,
        size = 'small',
        InputProps,
        ...inputProps
    } = props;

    const inputRef = React.useRef<HTMLInputElement>(null);
    const prevValue = React.useRef('');
    const [value, setValue] = React.useState('');

    const onChange = React.useCallback((event: InputChangeEvent) => setValue(event?.target?.value || ''), []);

    React.useEffect(() => {
        let timeout: NodeJS.Timeout;
        const nextValue = value.trim();

        if (nextValue !== prevValue.current) {
            if (timer > 0) {
                /** xử lý loading khi bắt đầu nhập text */
                timeout = setTimeout(() => onChangeValue?.(nextValue), timer);
                onLoading?.(true);
            } else {
                /** thay đổi text ngay lập tức */
                onChangeValue?.(nextValue);
            }
            prevValue.current = nextValue;
        }

        return () => clearTimeout(timeout);
    }, [value]);

    const onClear = React.useCallback(() => {
        setValue('');
        inputRef.current?.focus?.();
    }, []);

    const startAdornment = React.useMemo(() => {
        return (
            InputProps?.startAdornment || (
                <InputAdornment position="start">
                    <SearchIcon color="primary" />
                </InputAdornment>
            )
        );
    }, [InputProps?.startAdornment]);

    const endAdornment = React.useMemo(() => {
        return (
            InputProps?.endAdornment || (
                <InputAdornment
                    position="end"
                    style={{ visibility: value ? 'visible' : 'hidden', cursor: 'pointer' }}
                    onClick={onClear}>
                    <ClearIcon color="primary" />
                </InputAdornment>
            )
        );
    }, [InputProps?.endAdornment, value]);

    return (
        <TextField
            type={type}
            inputRef={inputRef}
            spellCheck={spellCheck}
            value={value}
            onChange={onChange}
            size={size}
            InputProps={{
                ...InputProps,
                startAdornment,
                endAdornment,
            }}
            {...inputProps}
        />
    );
});

InputSearch.displayName = 'InputSearch';
export default InputSearch;
