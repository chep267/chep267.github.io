/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import * as React from 'react';

/** lib components */
import { StyledEngineProvider } from '@mui/material/styles';
import { CssBaseline, useMediaQuery, createTheme, ThemeProvider as ThemeProviderMUI } from '@mui/material';

/** constants */
import { themeLocalKey } from '@module-base/constants/storeKey';
import { themeObject, breakpoints, palette } from '@module-theme/constants/data';
import { ThemeContext } from '@module-theme/constants/contexts';

/** utils */
import { localStorageBase } from '@module-base/utils/storage';
import { Crypto } from '@module-base/utils/security';

/** types */
import type { PropsWithChildren } from 'react';
import type { ThemeOptions } from '@mui/material';
import type { ThemeModeType, ThemeContextProps } from '@module-theme/models';

export default function ThemeProvider(props: PropsWithChildren) {
    const { children } = props;
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    const themeOptions = React.useRef<Record<ThemeModeType, ThemeOptions>>({
        dark: { palette: palette.dark, breakpoints } as ThemeOptions,
        light: { palette: palette.light, breakpoints } as ThemeOptions,
    }).current;

    const [mode, setMode] = React.useState<ThemeModeType>(() => {
        const modeLocal = Crypto.decrypt(localStorageBase.get(themeLocalKey)) as ThemeModeType;
        if (modeLocal && modeLocal in themeObject) {
            return modeLocal;
        }
        return prefersDarkMode ? themeObject.dark : themeObject.light;
    });

    const setTheme = React.useCallback<ThemeContextProps['method']['setTheme']>((value) => {
        setMode((prev) => {
            if (prev !== value) {
                localStorageBase.set(themeLocalKey, Crypto.encrypt(value));
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
