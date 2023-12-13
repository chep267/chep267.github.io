/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import * as React from 'react';
import classnames from 'classnames';

/** lib components */
import { Stack, Paper } from '@mui/material';

/** components */
import ThreadTitle from '@module-messenger/components/ThreadTitle';
import ThreadContent from '@module-messenger/components/ThreadContent';
import ConversationHeader from '@module-messenger/components/ConversationHeader';
import ConversationBody from '@module-messenger/components/ConversationBody';
import ConversationFooter from '@module-messenger/components/ConversationFooter';
import ConversationRight from './ConversationRight';

/** styles */
import useStyles from './styles';

const ConversationScreen = React.memo(() => {
    const classes = useStyles();

    return (
        <Stack className={classes.screen}>
            <Paper className={classnames(classes.layoutDefault, classes.left)}>
                <ThreadTitle />
                <ThreadContent />
            </Paper>
            <Paper className={classnames(classes.layoutDefault, classes.center)}>
                <ConversationHeader />
                <ConversationBody />
                <ConversationFooter />
            </Paper>
            <ConversationRight />
        </Stack>
    );
});

ConversationScreen.displayName = 'ConversationScreen';
export default ConversationScreen;
