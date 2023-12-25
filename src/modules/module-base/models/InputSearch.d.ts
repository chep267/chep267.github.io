/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

/** types */
import type { TextFieldProps } from '@mui/material/TextField';

type InputSearchProps = Omit<TextFieldProps, 'value' | 'onChange'> & {
    timer?: number;
    onLoading?(loading: boolean): void;
    onChangeValue?(searchKey: string): void;
};

export type { InputSearchProps };
