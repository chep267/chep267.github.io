/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

/** lib components */
import { Paper } from '@mui/material';

/** components */
import ThreadTitle from './ThreadTitle';
import ThreadContent from './ThreadContent';

/** styles */
import useStyles from '../styles';

export default function ConversationLeft() {
    const classes = useStyles();

    return (
        <Paper className={classes.left}>
            <ThreadTitle />
            <ThreadContent />
        </Paper>
    );
}
