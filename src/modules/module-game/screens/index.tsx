/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */
import * as React from 'react';
import { Route, Routes } from 'react-router-dom';

/** constants */
import { SCREEN } from '@module-global/constants/screen';

/** screens */
const NotFoundScreen = React.lazy(() => import('@module-base/screens/NotFoundScreen'));
const PokemonScreen = React.lazy(() => import('./PokemonScreen'));

export default function GameRouter() {
    return (
        <React.Suspense fallback={null}>
            <Routes>
                <Route index element={<PokemonScreen />} />
                <Route path={SCREEN.GAME_POKEMON} element={<PokemonScreen />} />
                <Route path="*" element={<NotFoundScreen />} />
            </Routes>
        </React.Suspense>
    );
}
