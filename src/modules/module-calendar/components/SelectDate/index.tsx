/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

/** lib components */
import { Stack } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

/** styles */
import useStyles from './styles';

/** types */
import type { Dayjs } from 'dayjs';
import type { PropsWithChildren } from 'react';
import type { DatePickerProps } from '@mui/x-date-pickers';

type SelectDateProps = PropsWithChildren<DatePickerProps<Dayjs>>;

export default function SelectDate(props: SelectDateProps) {
    const { children, value, views, onChange } = props;
    const classes = useStyles();

    return (
        <Stack className={classes.selectDate}>
            {children}
            <DatePicker className={classes.date_piker} views={views} value={value} onChange={onChange} />
        </Stack>
    );
}
