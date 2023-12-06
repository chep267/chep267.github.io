/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import classnames from 'classnames';

/** lib components */
import { Stack } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

/** styles */
import useStyles from './styles';

/** types */
import type { Dayjs } from 'dayjs';
import type { PropsWithChildren } from 'react';
import type { DatePickerProps } from '@mui/x-date-pickers';

type SelectDateProps = PropsWithChildren<Pick<DatePickerProps<Dayjs>, 'className' | 'views' | 'value' | 'onChange'>>;

export default function SelectDate(props: SelectDateProps) {
    const { className, children, value, views, onChange } = props;
    const classes = useStyles();

    return (
        <Stack className={classnames(classes.selectDate, className)}>
            {children}
            <DatePicker className={classes.date_piker} views={views} value={value} onChange={onChange} />
        </Stack>
    );
}
