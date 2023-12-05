/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

/** types */
import type { Dispatch, SetStateAction } from 'react';
import type { Dayjs } from 'dayjs';

type CalendarContextProps = {
    data: {
        display: 'sun' | 'mon' | 'sat';
        time: Dayjs;
        isToday: boolean;
    };
    method: {
        setDisplay: Dispatch<SetStateAction<CalendarContextProps['data']['display']>>;
        setTime: Dispatch<SetStateAction<Dayjs>>;
    };
};

type CalendarTableDataType = Record<number, Dayjs>;

export type { CalendarContextProps, CalendarTableDataType };
