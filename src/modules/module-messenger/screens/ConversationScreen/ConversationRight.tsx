/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import classnames from 'classnames';

/** lib components */
import { Paper } from '@mui/material';

/** components */
import { ThreadInfo } from '@module-messenger/components';

/** hooks */
import { useMessenger } from '@module-messenger/hooks';

/** styles */
import useStyles from './styles';

export default function ConversationRight() {
    const classes = useStyles();
    const { ui } = useMessenger();

    return (
        <Paper
            className={classnames(classes.layoutDefault, classes.right, {
                [classes.right_hidden]: !ui.openThreadInfo,
            })}>
            <ThreadInfo />
        </Paper>
    );
}
