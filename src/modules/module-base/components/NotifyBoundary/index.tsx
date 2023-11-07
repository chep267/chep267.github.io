/**
 *
 * @author dong.nguyenthanh@powergatesoftware.com on 26/07/2023.
 *
 */

import * as React from 'react';
import classnames from 'classnames';

/** lib components */
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

/** constants */
import { TIMING_NOTIFY_DURATION } from '@module-base/constants/defaultValue';

/** utils */
import { useBase } from '@module-base/hooks/useBase';

/** styles */
import useStyles from './styles';

/** types */
import type { SnackbarProps } from '@mui/material/Snackbar';

const NotifyBoundary = React.memo((props: SnackbarProps) => {
    const { notify } = useBase();
    const { open, message, mode, close, duration = TIMING_NOTIFY_DURATION } = notify;
    const classes = useStyles();

    const closeSnackbar = React.useCallback(() => notify.toggleNotify(), []);

    const anchorOrigin = React.useRef(Object.freeze({ vertical: 'top', horizontal: 'center' })).current;

    return (
        <Snackbar
            key="base-notify-boundary-app"
            autoHideDuration={duration}
            anchorOrigin={anchorOrigin}
            open={open}
            onClose={closeSnackbar}
            {...props}>
            <Alert
                className={classnames(classes.notify, { [classes.default]: !mode }, { [classes.hidden]: !open })}
                onClose={close ? closeSnackbar : undefined}
                severity={mode}
                elevation={6}
                variant="filled">
                <AlertTitle className={classes.title}>{mode}!</AlertTitle>
                {message}
            </Alert>
        </Snackbar>
    );
});

NotifyBoundary.displayName = 'NotifyBoundary';
export default NotifyBoundary;
