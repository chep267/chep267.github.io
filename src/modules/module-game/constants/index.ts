/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

/** constants */
import { SCREEN } from '@module-global/constants';

import pokemon_logo from '@module-game/assets/images/pokemon_logo.png';

const GAME_CENTER = {
    POKEMON: {
        icon: pokemon_logo,
        path: `${SCREEN.GAME}${SCREEN.GAME_POKEMON}`,
        name: 'Pokemon',
    },
};

export { GAME_CENTER };
export * from './Pikachu';
