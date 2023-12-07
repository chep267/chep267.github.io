/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

/** types */
type TypePokemonLevel = 'easy' | 'normal' | 'hard';

type TypePokemonItemStatus = 'select' | 'success' | 'error';

type TypePokemonGameStatus = 'pending' | 'start' | 'stop';

type TypePokemonItem = {
    x: number;
    y: number;
    value: number;
};

type PokemonContextProps = {
    data: {
        boardGame: TypePokemonItem[][];
        items: TypePokemonItem[];
        level: TypePokemonLevel;
        duration: number;
        status: TypePokemonGameStatus;
        gameKey: number;
    };
    method: {
        initGame: (level: TypePokemonLevel) => void;
        stopGame: () => void;
        restartGame: () => void;
        chooseItem: (item: TypePokemonItem) => void;
        getItemStatus: (item: TypePokemonItem) => TypePokemonItemStatus | undefined;
    };
};

export type { TypePokemonLevel, TypePokemonItem, TypePokemonItemStatus, PokemonContextProps };
