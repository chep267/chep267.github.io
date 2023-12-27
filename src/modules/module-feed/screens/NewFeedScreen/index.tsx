/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import * as React from 'react';

/** lib components */
import { Stack, Paper } from '@mui/material';

/** styles */
import useStyles from './styles';

const NewFeedScreen = React.memo(() => {
    const classes = useStyles();

    return (
        <Stack className={classes.screen}>
            <Paper className={classes.left_right}>NewFeedScreen left</Paper>
            <Paper className={classes.mainContent}>NewFeedScreen center</Paper>
            <Paper className={classes.left_right}>NewFeedScreen right</Paper>
        </Stack>
    );
});

NewFeedScreen.displayName = 'NewFeedScreen';
export default NewFeedScreen;
