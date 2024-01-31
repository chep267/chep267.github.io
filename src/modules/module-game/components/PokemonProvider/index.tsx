/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import * as React from 'react';

/** constants */
import { PokemonContext, PokemonStateDefault } from '@module-game/constants';

/** utils */
import { PokemonUtils } from '@module-game/utils';

/** hooks */
import { useCountdown } from '@module-base/hooks';

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
    const [point, setPoint] = React.useState<PokemonContextProps['data']['point']>(PokemonStateDefault.point);
    const [gameKey, setGameKey] = React.useState<PokemonContextProps['data']['gameKey']>(PokemonStateDefault.gameKey);
    const COUNT_DOWN = useCountdown({ numberCountdown: 0 });

    /** Effect init game */
    React.useEffect(() => {
        initGame(level);
        setPoint(0);
    }, [gameKey]);

    /** Effect victory game */
    React.useEffect(() => {
        if (point >= PokemonUtils.GameLevel[level].point) {
            setStatus('next');
        }
    }, [point]);

    /** Effect stop game */
    React.useEffect(() => {
        if (COUNT_DOWN.second === 0 && status === 'start') {
            setStatus('stop');
        }
    }, [COUNT_DOWN.second]);

    /** Effect select item */
    React.useEffect(() => {
        const statusPresent: TypePokemonItemStatus =
            items.length > 1 ? (PokemonUtils.hasPruneItem(boardGame, items) ? 'success' : 'error') : 'select';
        if (statusPresent === 'error') {
            setTimeout(() => {
                setItems([]);
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
        if (statusPresent === 'success') {
            setTimeout(() => setPoint((prev) => prev + 2), 1200);
        }
    }, [items]);

    const initGame = React.useCallback<PokemonContextProps['method']['initGame']>((level) => {
        setLevel(level);
        setBoardGame(PokemonUtils.genBoardGame(level));
        setStatus('start');
        COUNT_DOWN.onRefresh(PokemonUtils.GameLevel[level].duration);
    }, []);

    const restartGame = React.useCallback<PokemonContextProps['method']['restartGame']>(() => {
        setGameKey((prev) => (prev + 1) % 7);
    }, []);

    const nextGame = React.useCallback<PokemonContextProps['method']['nextGame']>(() => {
        setLevel((prev) => (prev === 'easy' ? 'normal' : 'hard'));
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
            if (PokemonUtils.isItemInArray(prev, item)) {
                return [];
            }
            return [...prev, item];
        });
    }, []);

    const getItemStatus: PokemonContextProps['method']['getItemStatus'] = (item) => {
        return PokemonUtils.isItemInArray(items, item) ? itemStatus : undefined;
    };

    const store = React.useMemo<PokemonContextProps>(
        () => ({
            data: {
                boardGame,
                items,
                status,
                level,
                duration: PokemonUtils.GameLevel[level].duration,
                gameKey,
                point,
            },
            method: { initGame, restartGame, stopGame, chooseItem, nextGame, getItemStatus },
        }),
        [status, boardGame, items, level, itemStatus, point]
    );

    return <PokemonContext.Provider value={store}>{children}</PokemonContext.Provider>;
}
