/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
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
    isSelectedDate?: boolean;
    onSelect(): void;
};

export default function CalendarItem(props: CalendarItemType) {
    const { data, isToday, isToMonth, isSelectedDate, onSelect } = props;
    const classes = useStyles();
    const date = data.date();

    return (
        <Link to={SCREEN.CALENDAR_INFO} onClick={onSelect}>
            <Stack
                className={classnames(
                    classes.item,
                    { [classes.itemHover]: !!date },
                    { [classes.itemToday]: isToday },
                    { [classes.itemSelectedDate]: isSelectedDate },
                    { [classes.itemDifferentMonth]: !isToMonth }
                )}>
                <Typography variant="h6">{date}</Typography>
            </Stack>
        </Link>
    );
}
