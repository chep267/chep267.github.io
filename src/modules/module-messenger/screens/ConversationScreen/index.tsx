/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import * as React from 'react';

/** lib components */
import { Stack } from '@mui/material';

/** components */
import ConversationLeft from './ConversationLeft';
import ConversationCenter from './ConversationCenter';
import ConversationRight from './ConversationRight';

/** styles */
import useStyles from './styles';

const ConversationScreen = React.memo(() => {
    const classes = useStyles();

    return (
        <Stack className={classes.screen}>
            <ConversationLeft />
            <ConversationCenter />
            <ConversationRight />
        </Stack>
    );
});

ConversationScreen.displayName = 'ConversationScreen';
export default ConversationScreen;
