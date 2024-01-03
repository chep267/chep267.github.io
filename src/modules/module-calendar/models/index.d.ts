/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

/** types */
import type { Dispatch, SetStateAction } from 'react';
import type { Dayjs } from 'dayjs';

export type CalendarContextProps = {
    data: {
        display: 'sun' | 'mon' | 'sat';
        time: Dayjs;
        isOnlyMonth: boolean;
    };
    method: {
        setDisplay: Dispatch<SetStateAction<CalendarContextProps['data']['display']>>;
        setTime: Dispatch<SetStateAction<Dayjs>>;
        setIsOnlyMonth: Dispatch<SetStateAction<boolean>>;
        isWeekend: (day: Dayjs) => boolean;
        isToday: (day: Dayjs) => boolean;
    };
};

export type CalendarTableDataType = Record<number, Dayjs>;
