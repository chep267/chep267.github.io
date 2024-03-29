/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import * as React from 'react';

/** lib components */
import { AppBar, Toolbar } from '@mui/material';

/** components */
import AppInfo from './AppInfo';
import AppMenu from './AppMenu';

/** styles */
import useStyles from './styles';

const AppHeader = React.memo(() => {
    const classes = useStyles();

    return (
        <AppBar position="sticky" className={classes.header}>
            <Toolbar>
                <AppInfo />
                <AppMenu />
            </Toolbar>
        </AppBar>
    );
});

AppHeader.displayName = 'AppHeader';
export default AppHeader;
