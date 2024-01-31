/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

/** types */
import type { PaletteMode } from '@mui/material';

export type ThemeModeType = PaletteMode;

export type ThemeContextProps = {
    data: {
        mode: ThemeModeType;
    };
    method: {
        setTheme: (value: ThemeModeType) => void;
    };
};
