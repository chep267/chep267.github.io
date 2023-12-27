/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import * as React from 'react';
import classnames from 'classnames';

/** lib components */
import { FormattedMessage } from 'react-intl';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

/** constants */
import { TIMING_NOTIFY_DURATION } from '@module-base/constants/defaultValue';

/** utils */
import { useNotify } from '@module-base/hooks/useNotify';

/** styles */
import useStyles from './styles';

/** types */
import type { NotifyBoundaryProps } from '@module-base/models';

const NotifyBoundary = React.memo((props: NotifyBoundaryProps) => {
    const NOTIFY = useNotify();
    const { open, message, intlMessage, mode, close, duration = TIMING_NOTIFY_DURATION } = NOTIFY.data;
    const classes = useStyles();

    const closeSnackbar = React.useCallback(() => NOTIFY.method.toggleNotify(), []);

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
                {intlMessage ? <FormattedMessage {...intlMessage} /> : message}
            </Alert>
        </Snackbar>
    );
});

NotifyBoundary.displayName = 'NotifyBoundary';
export default NotifyBoundary;
