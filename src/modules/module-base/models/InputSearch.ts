/**
 *
 * @author dong.nguyenthanh@powergatesoftware.com on 26/07/2023.
 *
 */

/** types */
import { TextFieldProps } from '@mui/material/TextField';

type InputSearchProps = Omit<TextFieldProps, 'value' | 'onChange'> & {
    timer?: number;
    onLoading?(loading: boolean): void;
    onChangeValue?(searchKey: string): void;
};

export type { InputSearchProps };
