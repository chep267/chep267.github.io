/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */
import * as React from 'react';
import { Route, Routes } from 'react-router-dom';

/** constants */
import { ScreenPath } from '@module-global/constants';

/** screens */
const NotFoundScreen = React.lazy(() => import('@module-base/screens/NotFoundScreen'));
const GameScreen = React.lazy(() => import('./GameScreen'));
const PokemonScreen = React.lazy(() => import('./PokemonScreen'));

export default function GameRouter() {
    return (
        <React.Suspense fallback={null}>
            <Routes>
                <Route index element={<GameScreen />} />
                <Route path={ScreenPath.GAME_POKEMON} element={<PokemonScreen />} />
                <Route path="*" element={<NotFoundScreen />} />
            </Routes>
        </React.Suspense>
    );
}
