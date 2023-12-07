/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

/** types */
import type { PokemonContextProps, TypePokemonItem } from '@module-game/models';

const GameLevel = {
    easy: {
        row: 7,
        col: 14,
        duration: 120,
    },
    normal: {
        row: 9,
        col: 16,
        duration: 200,
    },
    hard: {
        row: 11,
        col: 18,
        duration: 300,
    },
};

const MAX_IMG = 36;

const isItemInArray = (array: TypePokemonItem[], item: TypePokemonItem) => {
    return array.some((value) => value.x === item.x && value.y === item.y);
};

const genBoardGame = (level: PokemonContextProps['data']['level']) => {
    const { row, col } = GameLevel[level];
    const board: TypePokemonItem[][] = Array.from({ length: row }, () => []);
    const random = () => Math.floor(Math.random() * MAX_IMG) + 1;
    const total = row * col;
    for (let x = 0, count = 0; x < row; ++x) {
        for (let y = 0; y < col; ++y) {
            ++count;
            const px = row - 1 - x;
            const py = col - 1 - y;
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

export { GameLevel, isItemInArray, genBoardGame };
