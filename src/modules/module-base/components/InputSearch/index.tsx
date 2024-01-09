/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import * as React from 'react';

/** lib components */
import { TextField, InputAdornment } from '@mui/material';

/** icons */
import { Clear as ClearIcon, Search as SearchIcon } from '@mui/icons-material';

/** constants */
import { timeSearching } from '@module-base/constants';

/** types */
import type { InputSearchProps, InputChangeEvent } from '@module-base/models';

const InputSearch = React.memo(function InputSearch(props: InputSearchProps) {
    const {
        timer = timeSearching,
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
                onLoading?.(true);
                timeout = setTimeout(() => {
                    onChangeValue?.(nextValue);
                    onLoading?.(false);
                }, timer);
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

export default InputSearch;
