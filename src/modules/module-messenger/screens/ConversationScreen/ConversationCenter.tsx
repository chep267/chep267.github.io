/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import classnames from 'classnames';

/** lib components */
import { Paper } from '@mui/material';

/** components */
import ConversationHeader from '@module-messenger/components/ConversationHeader';
import ConversationBody from '@module-messenger/components/ConversationBody';
import ConversationFooter from '@module-messenger/components/ConversationFooter';

/** styles */
import useStyles from './styles';

export default function ConversationCenter() {
    const classes = useStyles();

    return (
        <Paper className={classnames(classes.layoutDefault, classes.center)}>
            <ConversationHeader />
            <ConversationBody />
            <ConversationFooter />
        </Paper>
    );
}
