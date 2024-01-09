/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

/** constants */
import { ScreenPath } from '@module-global/constants';
import pokemon_logo from '@module-game/assets/images/pokemon_logo.png';

export const GAME_CENTER = {
    POKEMON: {
        icon: pokemon_logo,
        path: `${ScreenPath.GAME}${ScreenPath.GAME_POKEMON}`,
        name: 'Pokemon',
    },
};

export * from './Pikachu';
