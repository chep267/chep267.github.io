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
        duration: 180,
        point: 7 * 14,
    },
    normal: {
        row: 9,
        col: 16,
        duration: 240,
        point: 9 * 16,
    },
    hard: {
        row: 10,
        col: 20,
        duration: 360,
        point: 10 * 20,
    },
};

const MAX_IMG = 36;

const isItemInArray = (array: TypePokemonItem[], item: TypePokemonItem) => {
    return array.some((value) => value.x === item.x && value.y === item.y);
};

const genBoardGame = (level: PokemonContextProps['data']['level']) => {
    const { row, col } = GameLevel[level];
    const board: TypePokemonItem[][] = Array.from({ length: row }, (_v, x) =>
        Array.from({ length: col }, (_v, y) => ({
            x,
            y,
            value: 0,
        }))
    );
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
            if (count >= total / 2) {
                break;
            }
        }
        if (count >= total / 2) {
            break;
        }
    }

    /** đảo vị trí */
    for (let x = 0; x + 1 < row; ++x) {
        for (let y = 0; y + 2 < col; ++y) {
            const tg = board[x][y].value;
            board[x][y].value = board[x + 1][y].value;
            board[x + 1][y].value = tg;
        }
    }
    for (let y = 0; y + 1 < col; ++y) {
        for (let x = 0; x + 2 < row; ++x) {
            const tg = board[x][y].value;
            board[x][y].value = board[x][y + 1].value;
            board[x][y + 1].value = tg;
        }
    }
    return board;
};

const hasValue = (board: TypePokemonItem[][], x: number, y: number) => {
    /** check value */
    return !!board?.[x]?.[y]?.value || false;
};

const checkHorizontal = (board: TypePokemonItem[][], x: number, y1: number, y2: number) => {
    /** check ngang */
    const maxY = Math.max(y1, y2);
    const minY = Math.min(y1, y2);
    for (let y = minY; y <= maxY; ++y) {
        if (hasValue(board, x, y)) {
            return false;
        }
    }
    return true;
};

const checkVertical = (board: TypePokemonItem[][], y: number, x1: number, x2: number) => {
    /** check dọc */
    const maxX = Math.max(x1, x2);
    const minX = Math.min(x1, x2);
    for (let x = minX; x <= maxX; ++x) {
        if (hasValue(board, x, y)) {
            return false;
        }
    }
    return true;
};

const checkCross = (board: TypePokemonItem[][], first: TypePokemonItem, second: TypePokemonItem) => {
    /** check ngang - dọc */
    const maxX = Math.max(first.x, second.x);
    const minX = Math.min(first.x, second.x);
    const maxY = Math.max(first.y, second.y);
    const minY = Math.min(first.y, second.y);

    /** check ngang */
    if (first.x === second.x) {
        return minY + 1 === maxY || checkHorizontal(board, first.x, minY + 1, maxY - 1);
    }
    /** check dọc */
    if (first.y === second.y) {
        return minX + 1 === maxX || checkVertical(board, first.y, minX + 1, maxX - 1);
    }
    return false;
};

const checkTop = (board: TypePokemonItem[][], first: TypePokemonItem, second: TypePokemonItem) => {
    /** check ăn trên */
    if (hasValue(board, first.x - 1, first.y)) {
        return false;
    }

    const minX = Math.min(first.x, second.x);
    const maxY = Math.max(first.y, second.y);
    const minY = Math.min(first.y, second.y);

    /** check trên - trên */
    if (!hasValue(board, second.x - 1, second.y)) {
        for (let x = minX - 1; x >= -1; --x) {
            if (
                checkVertical(board, first.y, first.x - 1, x) &&
                checkVertical(board, second.y, second.x - 1, x) &&
                checkHorizontal(board, x, minY + 1, maxY - 1)
            ) {
                return true;
            }
        }
    }

    /** check trên - dưới */
    if (first.x > second.x + 1 && !hasValue(board, second.x + 1, second.y)) {
        for (let x = first.x - 1; x > second.x; --x) {
            if (
                checkVertical(board, first.y, first.x - 1, x) &&
                checkVertical(board, second.y, second.x + 1, x) &&
                checkHorizontal(board, x, minY + 1, maxY - 1)
            ) {
                return true;
            }
        }
    }

    /** check trên - trái - phải */
    if (first.x > second.x && (!hasValue(board, second.x, second.y - 1) || !hasValue(board, second.x, second.y + 1))) {
        if (checkVertical(board, first.y, first.x - 1, second.x) && checkHorizontal(board, second.x, minY + 1, maxY - 1)) {
            return true;
        }
    }

    return false;
};

const checkBot = (board: TypePokemonItem[][], first: TypePokemonItem, second: TypePokemonItem) => {
    /** check ăn dưới */
    if (hasValue(board, first.x + 1, first.y)) {
        return false;
    }

    const maxX = Math.max(first.x, second.x);
    const maxY = Math.max(first.y, second.y);
    const minY = Math.min(first.y, second.y);

    /** check dưới - dưới */
    if (!hasValue(board, second.x + 1, second.y)) {
        for (let x = maxX + 1; x <= board.length; ++x) {
            if (
                checkVertical(board, first.y, first.x + 1, x) &&
                checkVertical(board, second.y, second.x + 1, x) &&
                checkHorizontal(board, x, minY + 1, maxY - 1)
            ) {
                return true;
            }
        }
    }

    /** check dưới - trên */
    if (first.x + 1 < second.x && !hasValue(board, second.x - 1, second.y)) {
        for (let x = first.x + 1; x < second.x; ++x) {
            if (
                checkVertical(board, first.y, first.x + 1, x) &&
                checkVertical(board, second.y, second.x - 1, x) &&
                checkHorizontal(board, x, minY + 1, maxY - 1)
            ) {
                return true;
            }
        }
    }

    /** check dưới - trái - phải */
    if (first.x < second.x && (!hasValue(board, second.x, second.y - 1) || !hasValue(board, second.x, second.y + 1))) {
        if (checkVertical(board, first.y, first.x + 1, second.x) && checkHorizontal(board, second.x, minY + 1, maxY - 1)) {
            return true;
        }
    }

    return false;
};

const checkLeft = (board: TypePokemonItem[][], first: TypePokemonItem, second: TypePokemonItem) => {
    /** check ăn trái */
    if (hasValue(board, first.x, first.y - 1)) {
        return false;
    }

    const maxX = Math.max(first.x, second.x);
    const minX = Math.min(first.x, second.x);
    const maxY = Math.max(first.y, second.y);
    const minY = Math.min(first.y, second.y);

    /** check trái - trái */
    if (!hasValue(board, second.x, second.y - 1)) {
        for (let y = minY - 1; y >= -1; --y) {
            if (
                checkVertical(board, y, minX + 1, maxX - 1) &&
                checkHorizontal(board, first.x, first.y - 1, y) &&
                checkHorizontal(board, second.x, second.y - 1, y)
            ) {
                return true;
            }
        }
    }

    /** check trái - phải */
    if (first.y > second.y + 1 && !hasValue(board, second.x, second.y + 1)) {
        for (let y = minY + 1; y < maxY; ++y) {
            if (
                checkVertical(board, y, minX + 1, maxX - 1) &&
                checkHorizontal(board, first.x, first.y - 1, y) &&
                checkHorizontal(board, second.x, second.y + 1, y)
            ) {
                return true;
            }
        }
    }

    /** check trái - trên - dưới  */
    if (first.y > second.y && (!hasValue(board, second.x - 1, second.y) || !hasValue(board, second.x + 1, second.y))) {
        if (checkHorizontal(board, first.x, first.y - 1, second.y) && checkVertical(board, second.y, minX + 1, maxX - 1)) {
            return true;
        }
    }

    return false;
};

/** check ăn phải */
const checkRight = (board: TypePokemonItem[][], first: TypePokemonItem, second: TypePokemonItem) => {
    if (hasValue(board, first.x, first.y + 1)) {
        return false;
    }

    const maxX = Math.max(first.x, second.x);
    const minX = Math.min(first.x, second.x);
    const maxY = Math.max(first.y, second.y);
    const minY = Math.min(first.y, second.y);

    /** check phải - phải */
    if (!hasValue(board, second.x, second.y + 1)) {
        for (let y = maxY + 1; y <= board[0].length; ++y) {
            if (
                checkVertical(board, y, minX + 1, maxX - 1) &&
                checkHorizontal(board, first.x, first.y + 1, y) &&
                checkHorizontal(board, second.x, second.y + 1, y)
            ) {
                return true;
            }
        }
    }

    /** check phải - trái */
    if (first.y + 1 < second.y && !hasValue(board, second.x, second.y - 1)) {
        for (let y = minY + 1; y < maxY; ++y) {
            if (
                checkVertical(board, y, minX + 1, maxX - 1) &&
                checkHorizontal(board, first.x, first.y + 1, y) &&
                checkHorizontal(board, second.x, second.y - 1, y)
            ) {
                return true;
            }
        }
    }

    /** check phải - trên - dưới  */
    if (first.y < second.y && (!hasValue(board, second.x - 1, second.y) || !hasValue(board, second.x + 1, second.y))) {
        if (checkHorizontal(board, first.x, first.y + 1, second.y) && checkVertical(board, second.y, minX + 1, maxX - 1)) {
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
        checkTop(board, first, second) ||
        checkBot(board, first, second) ||
        checkLeft(board, first, second) ||
        checkRight(board, first, second)
    );
};

export { GameLevel, isItemInArray, genBoardGame, hasPruneItem };
