/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

/** lib components */
import { Stack } from '@mui/material';

/** components */
import Info from './Info';
import TimeToday from './TimeToday';

/** styles */
import useStyles from './styles';

export default function AppInfo() {
    const classes = useStyles();

    return (
        <Stack className={classes.info}>
            <Info />
            <span className={classes.infoDot} />
            <TimeToday />
        </Stack>
    );
}
