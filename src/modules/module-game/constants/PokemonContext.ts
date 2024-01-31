/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import * as React from 'react';

/** constants */
import { emptyFunction } from '@module-base/constants';
import { PokemonStateDefault } from './PokemonStateDefault.ts';

/** types */
import type { PokemonContextProps } from '@module-game/models';

export const PokemonContext = React.createContext<PokemonContextProps>({
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
