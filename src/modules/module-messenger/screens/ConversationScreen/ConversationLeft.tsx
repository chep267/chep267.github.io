/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import classnames from 'classnames';

/** lib components */
import { Paper } from '@mui/material';

/** components */
import { ThreadSearchProvider, ThreadTitle, ThreadSearch, ThreadContent } from '@module-messenger/components';

/** styles */
import useStyles from './styles';

export default function ConversationLeft() {
    const classes = useStyles();

    return (
        <Paper className={classnames(classes.layoutDefault, classes.left)}>
            <ThreadTitle />
            <ThreadSearchProvider>
                <ThreadSearch />
                <ThreadContent />
            </ThreadSearchProvider>
        </Paper>
    );
}
