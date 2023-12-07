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

/** check value */
const hasValue = (board: TypePokemonItem[][], x: number, y: number) => {
    return !!board?.[x]?.[y]?.value || false;
};

/** check ngang */
const checkHorizontal = (board: TypePokemonItem[][], x: number, y1: number, y2: number) => {
    const maxY = Math.max(y1, y2);
    const minY = Math.min(y1, y2);
    for (let y = minY; y <= maxY; ++y) {
        if (hasValue(board, x, y)) {
            return false;
        }
    }
    return true;
};

/** check dọc */
const checkVertical = (board: TypePokemonItem[][], y: number, x1: number, x2: number) => {
    const maxX = Math.max(x1, x2);
    const minX = Math.min(x1, x2);
    for (let x = minX; x <= maxX; ++x) {
        if (hasValue(board, x, y)) {
            return false;
        }
    }
    return true;
};

/** check ngang-dọc */
const checkCross = (board: TypePokemonItem[][], first: TypePokemonItem, second: TypePokemonItem) => {
    const maxX = Math.max(first.x, second.x);
    const minX = Math.min(first.x, second.x);
    const maxY = Math.max(first.y, second.y);
    const minY = Math.min(first.y, second.y);

    if (first.x === second.x) {
        return minY + 1 === maxY || checkHorizontal(board, first.x, minY + 1, maxY - 1);
    }
    if (first.y === second.y) {
        return minX + 1 === maxX || checkVertical(board, first.y, minX + 1, maxX - 1);
    }
};

/** check trên - trên */
const checkTopTop = (board: TypePokemonItem[][], first: TypePokemonItem, second: TypePokemonItem) => {
    const minX = Math.min(first.x, second.x);
    const maxY = Math.max(first.y, second.y);
    const minY = Math.min(first.y, second.y);
    for (let x = minX - 1; x >= -1; --x) {
        if (
            checkVertical(board, first.y, first.x - 1, x) &&
            checkVertical(board, second.y, second.x - 1, x) &&
            checkHorizontal(board, x, minY + 1, maxY - 1)
        ) {
            return true;
        }
    }
    return false;
};

/** check dưới - dưới */
const checkBotBot = (board: TypePokemonItem[][], first: TypePokemonItem, second: TypePokemonItem) => {
    const maxX = Math.max(first.x, second.x);
    const maxY = Math.max(first.y, second.y);
    const minY = Math.min(first.y, second.y);

    for (let x = maxX + 1; x <= board.length; ++x) {
        if (
            checkVertical(board, first.y, first.x + 1, x) &&
            checkVertical(board, second.y, second.x + 1, x) &&
            checkHorizontal(board, x, minY + 1, maxY - 1)
        ) {
            return true;
        }
    }
    return false;
};

/** check trái - trái */
const checkLeftLeft = (board: TypePokemonItem[][], first: TypePokemonItem, second: TypePokemonItem) => {
    const minX = Math.min(first.x, second.x);
    const maxX = Math.max(first.x, second.x);
    const minY = Math.min(first.y, second.y);
    for (let y = minY - 1; y >= -1; --y) {
        if (
            checkHorizontal(board, first.x, first.y - 1, y) &&
            checkHorizontal(board, second.x, second.y - 1, y) &&
            checkVertical(board, y, minX + 1, maxX - 1)
        ) {
            return true;
        }
    }
    return false;
};

/** check phải - phải */
const checkRightRight = (board: TypePokemonItem[][], first: TypePokemonItem, second: TypePokemonItem) => {
    const minX = Math.min(first.x, second.x);
    const maxX = Math.max(first.x, second.x);
    const maxY = Math.max(first.y, second.y);
    for (let y = maxY + 1; y <= board[0].length; ++y) {
        if (
            checkHorizontal(board, first.x, first.y + 1, y) &&
            checkHorizontal(board, second.x, second.y + 1, y) &&
            checkVertical(board, y, minX + 1, maxX - 1)
        ) {
            return true;
        }
    }
    return false;
};

const hasPruneItem = (board: TypePokemonItem[][], items: TypePokemonItem[]) => {
    const first = items[0];
    const second = items[1];
    if (items.length < 2 || !first || !second || first.value !== second.value) {
        return false;
    }
    return (
        checkCross(board, first, second) ||
        checkTopTop(board, first, second) ||
        checkBotBot(board, first, second) ||
        checkLeftLeft(board, first, second) ||
        checkRightRight(board, first, second)
    );
};

export { GameLevel, isItemInArray, genBoardGame, hasPruneItem };
