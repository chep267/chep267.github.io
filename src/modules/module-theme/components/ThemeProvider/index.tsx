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
import type { ThemeModeType, ThemeContextProps } from '@module-theme/models';

function ThemeProvider(props: PropsWithChildren) {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

    const [mode, setMode] = React.useState<ThemeModeType>(() => {
        const modeLocal = Decrypt(localStorageBase.get(themeLocalKey)) as ThemeModeType;
        if (modeLocal && modeLocal in themeObject) {
            return modeLocal;
        }
        return prefersDarkMode ? themeObject.dark : themeObject.light;
    });

    const toggleTheme = React.useCallback<ThemeContextProps['toggleTheme']>((value) => {
        setMode((prev) => {
            if (prev !== value) {
                localStorageBase.set(themeLocalKey, Encrypt(value));
            }
            return value;
        });
    }, []);

    const store = React.useMemo<ThemeContextProps>(
        () => ({
            mode,
            toggleTheme,
        }),
        [mode]
    );

    const themeOptions = React.useMemo(
        () => ({
            dark: { palette: paletteDark, breakpoints },
            light: { palette: paletteLight, breakpoints },
        }),
        []
    );

    // @ts-ignore
    const theme = createTheme(themeOptions[mode]);

    return (
        <ThemeContext.Provider value={store}>
            <StyledEngineProvider injectFirst>
                <ThemeProviderMUI theme={theme}>
                    <CssBaseline />
                    {props?.children}
                </ThemeProviderMUI>
            </StyledEngineProvider>
        </ThemeContext.Provider>
    );
}

export default ThemeProvider;
