/**
 *
 * @author dong.nguyenthanh@powergatesoftware.com on 26/07/2023.
 *
 */

/** types */
import { CalendarContextProps } from '@module-calendar/models';

const fillEmpty = (matrixCalendar: number[][], start: number, end: number) => {
    for (let day = start; day < end; ++day) {
        matrixCalendar[day].push(0);
    }
};

export function genMatrixCalendar(firstDay: number, totalDate: number, display: CalendarContextProps['display']) {
    const matrixCalendar: number[][] = Array.from({ length: 7 }, () => []);

    let day = firstDay;
    if (day > 0) {
        if (display === 'sat') {
            matrixCalendar[6].push(0);
        }
        fillEmpty(matrixCalendar, 0, day);
        if (display === 'mon') {
            matrixCalendar[0] = [];
        }
    }
    for (let date = 1; date <= totalDate; ++date) {
        matrixCalendar[day].push(date);
        day = day === 6 && date < totalDate ? 0 : day + 1;
    }
    if (day < 7) {
        fillEmpty(matrixCalendar, day, 7);
    }
    return matrixCalendar;
}
