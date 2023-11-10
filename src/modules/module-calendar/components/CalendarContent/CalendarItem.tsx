/**
 *
 * @author dong.nguyenthanh@powergatesoftware.com on 26/07/2023.
 *
 */

import classnames from 'classnames';

/** lib components */
import { Link } from 'react-router-dom';
import { Stack, Typography } from '@mui/material';

/** constants */
import { SCREEN } from '@module-global/constants/screen';

/** styles */
import useStyles from './styles';

/** types */
import type { Dayjs } from 'dayjs';

type CalendarItemType = {
    data: Dayjs;
    isToday?: boolean;
    isToMonth?: boolean;
};

export default function CalendarItem(props: CalendarItemType) {
    const { data, isToday, isToMonth } = props;
    const classes = useStyles();

    const date = data.date();
    // const month = data.month();
    // const year = data.year();

    return (
        <Link to={SCREEN.CALENDAR_INFO} state={props}>
            <Stack
                className={classnames(
                    classes.item,
                    { [classes.itemHover]: !!date },
                    { [classes.itemToday]: isToday },
                    { [classes.itemDifferentMonth]: !isToMonth }
                )}>
                <Typography variant="h6">{date}</Typography>
            </Stack>
        </Link>
    );
}
