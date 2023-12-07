/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import * as React from 'react';

/** utils */
import { GameLevel, genBoardGame, isItemInArray } from '@module-game/utils/helpers/Pokemon';

/** hooks */
import { useCountdown } from '@module-base/hooks/useCountdown';
import { PokemonContext, PokemonStateDefault } from '@module-game/hooks/usePokemon';

/** types */
import type { PropsWithChildren } from 'react';
import type { PokemonContextProps, TypePokemonItemStatus } from '@module-game/models';

export default function PokemonProvider(props: PropsWithChildren) {
    const { children } = props;
    const [status, setStatus] = React.useState<PokemonContextProps['data']['status']>(PokemonStateDefault.status);
    const [level, setLevel] = React.useState<PokemonContextProps['data']['level']>(PokemonStateDefault.level);
    const [boardGame, setBoardGame] = React.useState<PokemonContextProps['data']['boardGame']>(PokemonStateDefault.boardGame);
    const [items, setItems] = React.useState<PokemonContextProps['data']['items']>(PokemonStateDefault.items);
    const [itemStatus, setItemStatus] = React.useState<TypePokemonItemStatus>('select');
    const [gameKey, setGameKey] = React.useState(PokemonStateDefault.gameKey);
    const COUNT_DOWN = useCountdown({ numberCountdown: 0 });

    /** Effect init */
    React.useEffect(() => {
        initGame(level);
    }, [gameKey]);

    /** Effect count down */
    React.useEffect(() => {
        if (COUNT_DOWN.second === 0 && status === 'start') {
            setStatus('stop');
        }
    }, [COUNT_DOWN.second]);

    /** Effect select item */
    React.useEffect(() => {
        const statusPresent: TypePokemonItemStatus =
            items.length > 1 ? (items[0].value === items[1].value ? 'success' : 'error') : 'select';
        if (statusPresent === 'error') {
            setTimeout(() => {
                setItems([]);
                setItemStatus('select');
            }, 1000);
        } else if (statusPresent === 'success') {
            const item1 = items[0];
            const item2 = items[1];
            setTimeout(() => {
                setBoardGame((prev) => {
                    const board = [...prev];
                    board[item1.x][item1.y].value = 0;
                    board[item2.x][item2.y].value = 0;
                    return board;
                });
                setItems([]);
            }, 1000);
        }
        setItemStatus(statusPresent);
    }, [items]);

    const initGame = React.useCallback<PokemonContextProps['method']['initGame']>((level) => {
        setLevel(level);
        setBoardGame(genBoardGame(level));
        setStatus('start');
        COUNT_DOWN.onRefresh(GameLevel[level].duration);
    }, []);

    const restartGame = React.useCallback<PokemonContextProps['method']['restartGame']>(() => {
        setGameKey((prev) => (prev + 1) % 7);
    }, []);

    const stopGame = React.useCallback<PokemonContextProps['method']['stopGame']>(() => {
        // do
    }, []);

    const chooseItem = React.useCallback<PokemonContextProps['method']['chooseItem']>((item) => {
        setItems((prev) => {
            if (prev.length === 2) {
                return prev;
            }
            if (isItemInArray(prev, item)) {
                return [];
            }
            return [...prev, item];
        });
    }, []);

    const getItemStatus: PokemonContextProps['method']['getItemStatus'] = (item) => {
        return isItemInArray(items, item) ? itemStatus : undefined;
    };

    const store = React.useMemo<PokemonContextProps>(
        () => ({
            data: {
                boardGame,
                items,
                status,
                level,
                duration: GameLevel[level].duration,
                gameKey,
            },
            method: { initGame, restartGame, stopGame, chooseItem, getItemStatus },
        }),
        [status, boardGame, items, level, itemStatus]
    );

    return <PokemonContext.Provider value={store}>{children}</PokemonContext.Provider>;
}
