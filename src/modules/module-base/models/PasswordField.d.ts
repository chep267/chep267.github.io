/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

/** types */
import type { TextFieldProps } from '@mui/material/TextField';

export type PasswordFieldProps = TextFieldProps & { setFocus?(): void };
