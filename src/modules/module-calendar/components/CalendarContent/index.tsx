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
import { genMatrixCalendarDayJS } from '@module-calendar/utils/helpers/genMatrixCalendar';
import { reverseMatrix } from '@module-calendar/utils/helpers/reverseMatrix';

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
        const toDate = time.year() === today.year() && time.month() === today.month() ? today.date() : -1;

        let output: (keyof CalendarTableDataType)[];
        switch (display) {
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
            label: <CalendarLabel day={day} locale={locale} />,
            render: (item) => {
                const data = item[day];
                const isToMonth = data.year() === time.year() && data.month() === time.month();
                return <CalendarItem data={data} isToday={data.date() === toDate} isToMonth={isToMonth} />;
            },
        }));
    }, [display, locale, time]);

    const tableData = React.useMemo(() => {
        const matrixCalendar = genMatrixCalendarDayJS(time, display);
        const output = reverseMatrix(matrixCalendar);
        return output.map((item) => Object.assign({}, item));
    }, [time, display]);

    return <TableBase className={classes.calendar} rows={tableRows} data={tableData} />;
}
