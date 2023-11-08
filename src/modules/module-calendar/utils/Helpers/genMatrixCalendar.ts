/**
 *
 * @author dong.nguyenthanh@powergatesoftware.com on 26/07/2023.
 *
 */

export function genMatrixCalendar(firstDay: number, totalDate: number) {
    const matrixCalendar: number[][] = Array.from({ length: 7 }, () => []);

    const fillEmpty = (start: number, end: number) => {
        for (let day = start; day < end; ++day) {
            matrixCalendar[day].push(0);
        }
    };

    let day = firstDay;
    if (day > 0) {
        fillEmpty(0, day);
    }
    for (let date = 1; date <= totalDate; ++date) {
        matrixCalendar[day].push(date);
        day = day === 6 && date < totalDate ? 0 : day + 1;
    }
    if (day < 7) {
        fillEmpty(day, 7);
    }
    return matrixCalendar;
}
