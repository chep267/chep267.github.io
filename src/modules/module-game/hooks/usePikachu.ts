/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import * as React from 'react';

/** types */
import type { PikachuItemType, PikachuItemStatusType } from '@module-game/models';

type PikachuState = {
    row: number;
    col: number;
};

const MAX_IMG = 36;

const isItemInArray = (array: PikachuItemType[], item: PikachuItemType) => {
    return array.some((value) => value.x === item.x && value.y === item.y);
};

const genBoard = (payload: PikachuState) => {
    const { row, col } = payload;
    const board: PikachuItemType[][] = [];
    const random = () => Math.floor(Math.random() * MAX_IMG) + 1;
    const total = row * col;
    for (let x = 0, count = 0; x < row; ++x) {
        for (let y = 0; y < col; ++y) {
            ++count;
            const px = row - 1 - x;
            const py = col - 1 - y;
            if (!board[x]) {
                board[x] = [];
            }
            if (!board[px]) {
                board[px] = [];
            }
            const value = random();
            board[x][y] = { x, y, value };
            board[px][py] = { x: px, y: py, value };
            if (count === total / 2) {
                break;
            }
        }
        if (count === total / 2) {
            break;
        }
    }

    for (let x = 0; x + 1 < row; ++x) {
        for (let y = 0; y + 2 < col; ++y) {
            const tg = board[x][y].value;
            board[x][y].value = board[x + 1][y].value;
            board[x + 1][y].value = tg;
        }
    }
    return board;
};

export default function usePikachu() {
    const [state, setState] = React.useState<PikachuState>({
        row: 0,
        col: 0,
    });
    const [boardGame, setBoardGame] = React.useState<PikachuItemType[][]>([]);
    const [itemSelects, setItemSelects] = React.useState<PikachuItemType[]>([]);
    const [itemStatus, setItemStatus] = React.useState<PikachuItemStatusType>('');

    console.log('itemStatus: ', itemStatus);

    React.useEffect(() => {
        reload();
    }, [state]);

    React.useEffect(() => {
        if (itemSelects.length === 0) {
            setItemStatus('');
        } else if (itemSelects.length === 1) {
            setItemStatus('select');
        } else {
            setItemStatus(itemSelects[0].value === itemSelects[1].value ? 'success' : 'error');
        }
    }, [itemSelects]);

    React.useEffect(() => {
        if (itemStatus === 'error' && itemSelects.length > 1) {
            setTimeout(() => {
                setItemSelects([]);
                setItemStatus('select');
            }, 1000);
        }
        if (itemStatus === 'success' && itemSelects.length > 1) {
            const item1 = itemSelects[0];
            const item2 = itemSelects[1];
            setTimeout(() => {
                setBoardGame((prev) => {
                    const board = [...prev];
                    board[item1.x][item1.y].value = 0;
                    board[item2.x][item2.y].value = 0;
                    return board;
                });
                setItemSelects([]);
            }, 1000);
        }
    }, [itemStatus]);

    const init = React.useCallback((payload: PikachuState) => {
        setState(payload);
    }, []);

    const reload = React.useCallback(() => {
        setBoardGame(genBoard(state));
    }, [state]);

    const chooseItem = React.useCallback((item: PikachuItemType) => {
        setItemSelects((prev) => {
            if (isItemInArray(prev, item)) {
                return [];
            }
            return [...prev, item];
        });
    }, []);

    const getItemStatus = (item: PikachuItemType) => {
        return isItemInArray(itemSelects, item) ? itemStatus : '';
    };

    return {
        data: { boardGame, itemSelects },
        method: {
            init,
            reload,
            chooseItem,
            getItemStatus,
        },
    };
}
