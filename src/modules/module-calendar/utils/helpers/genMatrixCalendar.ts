/**
 *
 * @author dong.nguyenthanh@powergatesoftware.com on 26/07/2023.
 *
 */

/** types */
import type { Dayjs } from 'dayjs';
import type { CalendarContextProps } from '@module-calendar/models';

export function genMatrixCalendar(time: Dayjs, display: CalendarContextProps['display']) {
    const matrixCalendar: number[][] = Array.from({ length: 7 }, () => []);
    const firstDay = time.set('date', 1);
    const totalDate = time.daysInMonth();
    let day = firstDay.day();

    /** fill before matrixCalendar */
    if (display === 'sun') {
        for (let i = 0; i < day; ++i) {
            matrixCalendar[i].push(0);
        }
    } else if (display === 'mon') {
        for (let i = day === 0 ? 6 : day - 1; i >= 1; --i) {
            matrixCalendar[i].push(0);
        }
    } else if (display === 'sat') {
        if (day !== 6) {
            for (let i = day - 1; i >= 0; --i) {
                matrixCalendar[i].push(0);
            }
            matrixCalendar[6].push(0);
        }
    }

    /** fill matrixCalendar */
    for (let date = 1; date <= totalDate; ++date) {
        matrixCalendar[day].push(date);
        day = date === totalDate ? day : (day + 1) % 7;
    }

    /** fill after matrixCalendar */
    if (display === 'sun') {
        for (let i = day + 1; i <= 6; ++i) {
            matrixCalendar[i].push(0);
        }
    } else if (display === 'mon') {
        if (day !== 0) {
            for (let i = day + 1; i <= 6; ++i) {
                matrixCalendar[i].push(0);
            }
            matrixCalendar[0].push(0);
        }
    } else if (display === 'sat') {
        for (let i = day === 6 ? 0 : day + 1; i <= 5; ++i) {
            matrixCalendar[i].push(0);
        }
    }

    return matrixCalendar;
}

export function genMatrixCalendarDayJS(time: Dayjs, display: CalendarContextProps['display']) {
    const matrixCalendar: Dayjs[][] = Array.from({ length: 7 }, () => []);
    const firstDay = time.set('date', 1);
    const totalDate = time.daysInMonth();
    let day = firstDay.day();

    /** fill before matrixCalendar */
    let prevDay = firstDay.add(-1, 'day');
    if (display === 'sun') {
        for (let i = 0; i < day; ++i) {
            matrixCalendar[i].push(prevDay);
            prevDay = prevDay.add(-1, 'day');
        }
    } else if (display === 'mon') {
        for (let i = day === 0 ? 6 : day - 1; i >= 1; --i) {
            matrixCalendar[i].push(prevDay);
            prevDay = prevDay.add(-1, 'day');
        }
    } else if (display === 'sat') {
        if (day !== 6) {
            for (let i = day - 1; i >= 0; --i) {
                matrixCalendar[i].push(prevDay);
                prevDay = prevDay.add(-1, 'day');
            }
            matrixCalendar[6].push(prevDay);
        }
    }

    /** fill matrixCalendar */
    for (let date = 1; date <= totalDate; ++date) {
        matrixCalendar[day].push(time.set('date', date));
        day = date === totalDate ? day : (day + 1) % 7;
    }

    /** fill after matrixCalendar */
    let nextDay = firstDay.add(1, 'month');
    if (display === 'sun') {
        for (let i = day + 1; i <= 6; ++i) {
            matrixCalendar[i].push(nextDay);
            nextDay = nextDay.add(1, 'day');
        }
    } else if (display === 'mon') {
        if (day !== 0) {
            for (let i = day + 1; i <= 6; ++i) {
                matrixCalendar[i].push(nextDay);
                nextDay = nextDay.add(1, 'day');
            }
            matrixCalendar[0].push(nextDay);
        }
    } else if (display === 'sat') {
        for (let i = day === 6 ? 0 : day + 1; i <= 5; ++i) {
            matrixCalendar[i].push(nextDay);
            nextDay = nextDay.add(1, 'day');
        }
    }

    return matrixCalendar;
}
