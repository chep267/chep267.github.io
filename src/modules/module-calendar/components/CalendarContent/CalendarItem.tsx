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
import { SCREEN } from '@module-global/constants';

/** styles */
import useStyles from './styles';

/** types */
import type { Dayjs } from 'dayjs';

type CalendarItemType = {
    data: Dayjs;
    isHide?: boolean;
    isToday?: boolean;
    isToMonth?: boolean;
    isSelectedDate?: boolean;
    onSelect(): void;
};

export default function CalendarItem(props: CalendarItemType) {
    const { data, isHide, isToday, isToMonth, isSelectedDate, onSelect } = props;
    const classes = useStyles();
    const date = data.date();
    const isWeekend = data.day() === 0 || data.day() === 6;

    return isHide ? null : (
        <Link to={`${SCREEN.CALENDAR}${SCREEN.CALENDAR_INFO}`} onClick={onSelect}>
            <Stack
                className={classnames(
                    classes.item,
                    { [classes.itemHover]: !!date },
                    { [classes.itemToday]: isToday },
                    { [classes.itemSelectedDate]: isSelectedDate },
                    { [classes.itemDifferentMonth]: !isToMonth },
                    { [classes.itemWeekend]: isWeekend }
                )}>
                <Typography variant="h6">{date}</Typography>
            </Stack>
        </Link>
    );
}
