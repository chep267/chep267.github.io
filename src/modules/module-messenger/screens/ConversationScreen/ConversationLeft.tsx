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
import ThreadSearch from '@module-messenger/components/ThreadSearch';
import ThreadContent from '@module-messenger/components/ThreadContent';
import ThreadSearchProvider from '@module-messenger/components/ThreadSearchProvider';

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
