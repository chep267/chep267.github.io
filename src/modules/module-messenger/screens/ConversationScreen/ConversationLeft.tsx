/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import classnames from 'classnames';

/** lib components */
import { Paper } from '@mui/material';

/** components */
import ThreadTitle from '@module-messenger/components/ThreadTitle';
import ThreadContent from '@module-messenger/components/ThreadContent';

/** styles */
import useStyles from './styles';

export default function ConversationLeft() {
    const classes = useStyles();

    return (
        <Paper className={classnames(classes.layoutDefault, classes.left)}>
            <ThreadTitle />
            <ThreadContent />
        </Paper>
    );
}
