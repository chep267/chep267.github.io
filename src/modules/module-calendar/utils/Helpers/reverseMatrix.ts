/**
 *
 * @author dong.nguyenthanh@powergatesoftware.com on 26/07/2023.
 *
 */

export function reverseMatrix<T extends unknown[][]>(matrix: T) {
    const output: any[] = [];
    for (let j = 0; j < matrix[0].length; j++) {
        output.push([]);
        for (let i = 0; i < matrix.length; i++) {
            output[j].push(matrix[i][j]);
        }
    }
    return output as T;
}
