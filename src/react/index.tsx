/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import { QueryClientProvider } from '@tanstack/react-query';

/** utils */
import { queryClient } from '@root/utils/queryClient';
import { messages } from '@root/utils/messages';

/** providers */
import BaseProvider from '@module-base/components/BaseProvider';
import NotifyProvider from '@module-base/components/NotifyProvider';
import ThemeProvider from '@module-theme/components/ThemeProvider';
import LanguageProvider from '@module-language/components/LanguageProvider';
import AuthProvider from '@module-auth/components/AuthProvider';
import CalendarProvider from '@module-calendar/components/CalendarProvider';
import MessengerProvider from '@module-messenger/components/MessengerProvider';

/** screens */
import RootScreen from '@module-global/screens/MainScreen';

/** global styles */
import './global.css';

const App = () => (
    <QueryClientProvider client={queryClient}>
        <ThemeProvider>
            <LanguageProvider messages={messages}>
                <AuthProvider>
                    <CalendarProvider>
                        <MessengerProvider>
                            <NotifyProvider>
                                <BaseProvider>
                                    <RootScreen />
                                </BaseProvider>
                            </NotifyProvider>
                        </MessengerProvider>
                    </CalendarProvider>
                </AuthProvider>
            </LanguageProvider>
        </ThemeProvider>
    </QueryClientProvider>
);

export default App;
