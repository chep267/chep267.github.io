/**
 *
 * @author dong.nguyenthanh@powergatesoftware.com on 26/07/2023.
 *
 */

type CalendarContextProps = {
    display: 'default' | 'mon' | 'sat';
    toggleDisplay(display: CalendarContextProps['display']): void;
};

type CalendarTableDataType = { 0: number; 1: number; 2: number; 3: number; 4: number; 5: number; 6: number };

export type { CalendarContextProps, CalendarTableDataType };
