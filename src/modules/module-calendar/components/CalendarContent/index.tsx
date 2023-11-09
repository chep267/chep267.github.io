/**
 *
 * @author dong.nguyenthanh@powergatesoftware.com on 26/07/2023.
 *
 */

import * as React from 'react';
import dayjs from 'dayjs';

/** components */
import TableBase from '@module-base/components/TableBase';
import CalendarLabel from './CalendarLabel';
import CalendarItem from './CalendarItem';

/** utils */
import { genMatrixCalendar } from '@module-calendar/utils/Helpers/genMatrixCalendar';
import { reverseMatrix } from '@module-calendar/utils/Helpers/reverseMatrix';

/** hooks */
import { useLanguage } from '@module-language/hooks/useLanguage';
import { useCalendar } from '@module-calendar/hooks/useCalendar';

/** styles */
import useStyles from './styles';

/** types */
import type { Dayjs } from 'dayjs';
import type { TableBaseProps } from '@module-base/models';
import type { CalendarTableDataType } from '@module-calendar/models';

type Props = {
    time: Dayjs;
};

export default function CalendarContent(props: Props) {
    const { time } = props;
    const { locale } = useLanguage();
    const { display } = useCalendar();
    const classes = useStyles();

    const tableRows = React.useMemo<TableBaseProps<CalendarTableDataType>['rows']>(() => {
        const today = dayjs();
        const toDate = today.year() === time.year() && today.month() === time.month() ? today.date() : -1;
        let output: (keyof CalendarTableDataType)[];

        switch (display) {
            case 'sat':
                output = [6, 0, 1, 2, 3, 4, 5];
                break;
            case 'mon':
                output = [1, 2, 3, 4, 5, 6, 0];
                break;
            case 'default':
            default:
                output = [0, 1, 2, 3, 4, 5, 6];
                break;
        }

        return output.map((day) => ({
            id: `${day}`,
            label: <CalendarLabel day={day} locale={locale} />,
            render: (item) => <CalendarItem date={item[day]} isToday={item[day] === toDate} />,
        }));
    }, [display, locale, time]);

    const tableData = React.useMemo(() => {
        const totalDate = time.daysInMonth(); // => 28, 29, 30, 31
        const firstDay = time.set('date', 1).day(); // => 0 -> 6
        const matrixCalendar = genMatrixCalendar(firstDay, totalDate, display);
        const output = reverseMatrix(matrixCalendar);
        return output.map((item) => Object.assign({}, item));
    }, [time, display]);

    return <TableBase className={classes.calendar} rows={tableRows} data={tableData} />;
}
