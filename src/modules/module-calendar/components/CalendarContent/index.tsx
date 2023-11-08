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

/** styles */
import useStyles from './styles';

/** types */
import type { Dayjs } from 'dayjs';
import type { TableBaseProps } from '@module-base/models';

type Props = {
    time: Dayjs;
};

type TableDataType = { 0: number; 1: number; 2: number; 3: number; 4: number; 5: number; 6: number };

export default function CalendarContent(props: Props) {
    const { time } = props;
    const { locale } = useLanguage();
    const classes = useStyles();

    const tableRows = React.useMemo<TableBaseProps<TableDataType>['rows']>(() => {
        const today = dayjs();
        const toDate = today.year() === time.year() && today.month() === time.month() ? today.date() : -1;

        return [
            {
                id: 'sun',
                label: <CalendarLabel day={0} locale={locale} />,
                render: (item) => <CalendarItem date={item[0]} isToday={item[0] === toDate} />,
            },
            {
                id: 'mon',
                label: <CalendarLabel day={1} locale={locale} />,
                render: (item) => <CalendarItem date={item[1]} isToday={item[1] === toDate} />,
            },
            {
                id: 'tue',
                label: <CalendarLabel day={2} locale={locale} />,
                render: (item) => <CalendarItem date={item[2]} isToday={item[2] === toDate} />,
            },
            {
                id: 'wed',
                label: <CalendarLabel day={3} locale={locale} />,
                render: (item) => <CalendarItem date={item[3]} isToday={item[3] === toDate} />,
            },
            {
                id: 'thu',
                label: <CalendarLabel day={4} locale={locale} />,
                render: (item) => <CalendarItem date={item[4]} isToday={item[4] === toDate} />,
            },
            {
                id: 'fri',
                label: <CalendarLabel day={5} locale={locale} />,
                render: (item) => <CalendarItem date={item[5]} isToday={item[5] === toDate} />,
            },
            {
                id: 'sat',
                label: <CalendarLabel day={6} locale={locale} />,
                render: (item) => <CalendarItem date={item[6]} isToday={item[6] === toDate} />,
            },
        ];
    }, [locale, time]);

    const data = React.useMemo(() => {
        const totalDate = time.daysInMonth(); // => 28, 29, 30, 31
        const firstDay = time.set('date', 1).day(); // => 0 -> 6
        const matrixCalendar = genMatrixCalendar(firstDay, totalDate);
        const output = reverseMatrix(matrixCalendar);
        return output.map((item) => Object.assign({}, item));
    }, [time]);

    return <TableBase className={classes.calendar} rows={tableRows} data={data} />;
}
