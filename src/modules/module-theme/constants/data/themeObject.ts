/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

/** types */
import type { PaletteMode } from '@mui/material';

export const themeObject: Readonly<Record<PaletteMode, PaletteMode>> = Object.freeze({
    light: 'light',
    dark: 'dark',
});
