/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

/** utils */
import { PokemonUtils } from '@module-game/utils';

/** types */
import type { PokemonContextProps } from '@module-game/models';

export const PokemonStateDefault: PokemonContextProps['data'] = {
    boardGame: [],
    items: [],
    status: 'pending',
    level: 'easy',
    duration: PokemonUtils.GameLevel['easy'].duration,
    gameKey: 1,
    point: 0,
};
