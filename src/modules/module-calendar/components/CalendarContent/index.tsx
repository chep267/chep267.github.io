/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import * as React from 'react';
import dayjs from 'dayjs';

/** components */
import TableBase from '@module-base/components/TableBase';
import CalendarLabel from './CalendarLabel';
import CalendarItem from './CalendarItem';

/** utils */
import { genMatrixCalendarDayJS } from '@module-calendar/utils/helpers/genMatrixCalendar';
import { reverseMatrix } from '@module-calendar/utils/helpers/reverseMatrix';

/** hooks */
import { useCalendar } from '@module-calendar/hooks/useCalendar';

/** styles */
import useStyles from './styles';

/** types */
import type { TableBaseProps } from '@module-base/models';
import type { CalendarTableDataType } from '@module-calendar/models';

export default function CalendarContent() {
    const CALENDAR = useCalendar();
    const classes = useStyles();

    const tableRows = React.useMemo<TableBaseProps<CalendarTableDataType>['rows']>(() => {
        const TODAY = dayjs();
        const today =
            CALENDAR.data.time.year() === TODAY.year() && CALENDAR.data.time.month() === TODAY.month() ? TODAY.date() : 0;

        let output: (keyof CalendarTableDataType)[];
        switch (CALENDAR.data.display) {
            case 'sat':
                output = [6, 0, 1, 2, 3, 4, 5];
                break;
            case 'mon':
                output = [1, 2, 3, 4, 5, 6, 0];
                break;
            case 'sun':
            default:
                output = [0, 1, 2, 3, 4, 5, 6];
                break;
        }

        return output.map((day) => ({
            id: `${day}`,
            label: <CalendarLabel day={day} />,
            render: (item) => {
                const data = item[day];
                const isToMonth = data.year() === CALENDAR.data.time.year() && data.month() === CALENDAR.data.time.month();
                const isToday = isToMonth && data.date() === today;
                const isSelectedDate = isToMonth && data.date() === CALENDAR.data.time.date();
                const isHide = CALENDAR.data.isOnlyMonth ? !isToMonth : false;

                const onSelect = () => CALENDAR.method.setTime(data);
                return (
                    <CalendarItem
                        data={data}
                        isHide={isHide}
                        isToday={isToday}
                        isSelectedDate={isSelectedDate}
                        isToMonth={isToMonth}
                        onSelect={onSelect}
                    />
                );
            },
        }));
    }, [CALENDAR.data.display, CALENDAR.data.time, CALENDAR.data.isOnlyMonth]);

    const tableData = React.useMemo(() => {
        const matrixCalendar = genMatrixCalendarDayJS(CALENDAR.data.time, CALENDAR.data.display);
        const output = reverseMatrix(matrixCalendar);
        return output.map((item) => Object.assign({}, item));
    }, [CALENDAR.data.time, CALENDAR.data.display]);

    return <TableBase className={classes.calendar} rows={tableRows} data={tableData} />;
}
