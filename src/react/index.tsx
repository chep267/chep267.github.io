/**
 *
 * @author dong.nguyenthanh@powergatesoftware.com on 26/07/2023.
 *
 */

import * as React from 'react';
import { QueryClientProvider } from '@tanstack/react-query';

/** utils */
import { queryClient } from '@root/utils/queryClient';
import { messages } from '@root/utils/messages';

/** global styles */
import './global.css';

/** screens */
const RootScreen = React.lazy(() => import('@module-global/screens/MainScreen'));

/** providers */
import BaseProvider from '@module-base/components/BaseProvider';
import ThemeProvider from '@module-theme/components/ThemeProvider';
import LanguageProvider from '@module-language/components/LanguageProvider';
import AuthProvider from '@module-auth/components/AuthProvider';

const App = () => (
    <QueryClientProvider client={queryClient}>
        <ThemeProvider>
            <LanguageProvider messages={messages}>
                <AuthProvider>
                    <BaseProvider>
                        <RootScreen />
                    </BaseProvider>
                </AuthProvider>
            </LanguageProvider>
        </ThemeProvider>
    </QueryClientProvider>
);

export default App;
