/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import * as React from 'react';

/** constants */
import { emptyFunction } from '@module-base/constants';

/** utils */
import { GameLevel } from '@module-game/utils/helpers/Pokemon';

/** types */
import type { PokemonContextProps } from '@module-game/models';

const PokemonStateDefault: PokemonContextProps['data'] = {
    boardGame: [],
    items: [],
    status: 'pending',
    level: 'easy',
    duration: GameLevel['easy'].duration,
    gameKey: 1,
    point: 0,
};

const PokemonContext = React.createContext<PokemonContextProps>({
    data: PokemonStateDefault,
    method: {
        initGame: emptyFunction,
        stopGame: emptyFunction,
        restartGame: emptyFunction,
        nextGame: emptyFunction,
        chooseItem: emptyFunction,
        getItemStatus: () => 'select',
    },
});
PokemonContext.displayName = 'PokemonContext';

const usePokemon = () => React.useContext(PokemonContext);

export { PokemonContext, usePokemon, PokemonStateDefault };
