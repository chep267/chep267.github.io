/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

/** types */
import type { Dayjs } from 'dayjs';

type CalendarContextProps = {
    display: 'sun' | 'mon' | 'sat';
    toggleDisplay(display: CalendarContextProps['display']): void;
};

// type CalendarTableDataType = { 0: number; 1: number; 2: number; 3: number; 4: number; 5: number; 6: number };
type CalendarTableDataType = Record<number, Dayjs>;

export type { CalendarContextProps, CalendarTableDataType };
