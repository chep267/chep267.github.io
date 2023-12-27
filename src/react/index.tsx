/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
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
import NotifyProvider from '@module-base/components/NotifyProvider';
import ThemeProvider from '@module-theme/components/ThemeProvider';
import LanguageProvider from '@module-language/components/LanguageProvider';
import AuthProvider from '@module-auth/components/AuthProvider';
import CalendarProvider from '@module-calendar/components/CalendarProvider';
import MessengerProvider from '@module-messenger/components/MessengerProvider';

const App = () => (
    <QueryClientProvider client={queryClient}>
        <ThemeProvider>
            <LanguageProvider messages={messages}>
                <AuthProvider>
                    <CalendarProvider>
                        <MessengerProvider>
                            <BaseProvider>
                                <NotifyProvider>
                                    <RootScreen />
                                </NotifyProvider>
                            </BaseProvider>
                        </MessengerProvider>
                    </CalendarProvider>
                </AuthProvider>
            </LanguageProvider>
        </ThemeProvider>
    </QueryClientProvider>
);

export default App;
