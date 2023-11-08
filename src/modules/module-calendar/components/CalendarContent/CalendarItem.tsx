/**
 *
 * @author dong.nguyenthanh@powergatesoftware.com on 26/07/2023.
 *
 */

import classnames from 'classnames';

/** lib components */
import { Stack, Typography } from '@mui/material';

/** styles */
import useStyles from './styles';

/** types */
type CalendarItemType = {
    date: number;
    isToday?: boolean;
};

export default function CalendarItem(props: CalendarItemType) {
    const { date, isToday } = props;
    const classes = useStyles();

    return (
        <Stack className={classnames(classes.item, { [classes.itemToday]: isToday })}>
            <Typography variant="h6">{date || ''}</Typography>
        </Stack>
    );
}
