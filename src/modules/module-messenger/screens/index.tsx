/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */
import * as React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

/** constants */
import { ScreenPath } from '@module-global/constants';

/** utils */
import { genPath } from '@module-base/utils';

/** screens */
const NotFoundScreen = React.lazy(() => import('@module-base/screens/NotFoundScreen'));
const ConversationScreen = React.lazy(() => import('./ConversationScreen'));

export default function MessengerRouter() {
    return (
        <React.Suspense fallback={null}>
            <Routes>
                <Route
                    index
                    element={
                        <Navigate
                            to={genPath(ScreenPath.MESSENGER, ScreenPath.MESSENGER_CONVERSATION.replace(':tid', '0'))}
                        />
                    }
                />
                <Route path={ScreenPath.MESSENGER_CONVERSATION} element={<ConversationScreen />} />
                <Route path="*" element={<NotFoundScreen />} />
            </Routes>
        </React.Suspense>
    );
}
