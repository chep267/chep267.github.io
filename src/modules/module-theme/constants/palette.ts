/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

/** types */
import type { Palette } from '@mui/material';

type DeepPartial<T> = {
    [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K];
};

export const createGradient = (color1: string, color2: string) => {
    return `linear-gradient(to bottom, ${color1}, ${color2})`;
};

export const paletteLight: DeepPartial<Palette> = {
    mode: 'light',
    primary: {
        main: '#038cf5',
    },
};

export const paletteDark: DeepPartial<Palette> = {
    mode: 'dark',
    primary: {
        main: '#038cf5',
    },
    background: { paper: '#051E34' },
};
