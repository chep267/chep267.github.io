/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import * as React from 'react';

/** lib components */
import {
    StyledEngineProvider,
    CssBaseline,
    useMediaQuery,
    createTheme,
    ThemeProvider as ThemeProviderMUI,
} from '@mui/material';

/** constants */
import { themeLocalKey } from '@module-base/constants/localStoreKey';
import { themeObject } from '@module-theme/constants/themeObject';
import { breakpoints } from '@module-theme/constants/breakpoints';
import { paletteLight, paletteDark } from '@module-theme/constants/palette';

/** utils */
import { Decrypt, Encrypt } from '@module-base/utils/security';
import { localStorageBase } from '@module-base/utils/storages';

/** hooks */
import { ThemeContext } from '@module-theme/hooks/useTheme';

/** types */
import type { PropsWithChildren } from 'react';
import type { ThemeOptions } from '@mui/material';
import type { ThemeModeType, ThemeContextProps } from '@module-theme/models';

export default function ThemeProvider(props: PropsWithChildren) {
    const { children } = props;
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    const themeOptions = React.useRef<Record<ThemeModeType, ThemeOptions>>({
        dark: { palette: paletteDark, breakpoints } as ThemeOptions,
        light: { palette: paletteLight, breakpoints } as ThemeOptions,
    }).current;

    const [mode, setMode] = React.useState<ThemeModeType>(() => {
        const modeLocal = Decrypt(localStorageBase.get(themeLocalKey)) as ThemeModeType;
        if (modeLocal && modeLocal in themeObject) {
            return modeLocal;
        }
        return prefersDarkMode ? themeObject.dark : themeObject.light;
    });

    const setTheme = React.useCallback<ThemeContextProps['method']['setTheme']>((value) => {
        setMode((prev) => {
            if (prev !== value) {
                localStorageBase.set(themeLocalKey, Encrypt(value));
            }
            return value;
        });
    }, []);

    const store = React.useMemo<ThemeContextProps>(() => {
        return {
            data: {
                mode,
            },
            method: {
                setTheme,
            },
        };
    }, [mode]);

    const theme = createTheme(themeOptions[mode]);

    return (
        <ThemeContext.Provider value={store}>
            <StyledEngineProvider injectFirst>
                <ThemeProviderMUI theme={theme}>
                    <CssBaseline />
                    {children}
                </ThemeProviderMUI>
            </StyledEngineProvider>
        </ThemeContext.Provider>
    );
}
