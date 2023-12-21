/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

/** types */
import type { ColorType, PaletteMode, Theme } from '@mui/material';

declare module '@mui/material/styles' {
    interface BreakpointOverrides {
        xs: true;
        sm: true;
        md: true;
        lg: true;
        xl: true;
        mobile: true;
        tablet: true;
        laptop: true;
        desktop: true;
    }
}

declare module '@mui/material' {
    type ColorType =
        | '50'
        | '100'
        | '200'
        | '300'
        | '400'
        | '500'
        | '600'
        | '700'
        | '800'
        | '900'
        | '1000'
        | '1100'
        | 'A100'
        | 'A200'
        | 'A400'
        | 'A700'
        | 'bgColor';
    interface Color extends Record<ColorType, string> {}
}

declare module '@mui/material/styles' {
    interface Color extends Record<ColorType, string> {}

    interface PaletteColor {
        light: string;
        main: string;
        dark: string;
        contrastText: string;
    }

    interface Palette {
        gradients: any;
        chart: any;
    }

    // allow configuration using `createTheme`
    interface PaletteOptions {
        neutral?: PaletteOptions['primary'];
        purple?: PaletteOptions['primary'];
        mint?: PaletteOptions['primary'];
    }
}

declare module '@mui/styles/defaultTheme' {
    interface DefaultTheme extends Theme {}
}

type ThemeModeType = PaletteMode;

type ThemeContextProps = {
    data: {
        mode: ThemeModeType;
    };
    method: {
        setTheme: (value: ThemeModeType) => void;
    };
};

export type { ThemeModeType, ThemeContextProps };
