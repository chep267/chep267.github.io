/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import { QueryClientProvider } from '@tanstack/react-query';

/** utils */
import { queryClient, messages } from '@root/utils';

/** providers */
import { NotifyProvider } from '@module-base/components';
import { ThemeProvider } from '@module-theme/components';
import { LanguageProvider } from '@module-language/components';
import { AuthProvider } from '@module-auth/components';
import { CalendarProvider } from '@module-calendar/components';
import { MessengerProvider } from '@module-messenger/components';

/** screens */
import RootScreen from '@module-global/screens/MainScreen';

/** global styles */
import './global.css';

export default function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider>
                <LanguageProvider messages={messages}>
                    <AuthProvider>
                        <CalendarProvider>
                            <MessengerProvider>
                                <NotifyProvider>
                                    <RootScreen />
                                </NotifyProvider>
                            </MessengerProvider>
                        </CalendarProvider>
                    </AuthProvider>
                </LanguageProvider>
            </ThemeProvider>
        </QueryClientProvider>
    );
}
