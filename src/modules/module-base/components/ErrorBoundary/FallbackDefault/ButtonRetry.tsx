/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import * as React from 'react';
import { useIntl } from 'react-intl';

/** lib components */
import { Stack, Typography, Button } from '@mui/material';

/** constants */
import { timeCountdownError } from '@module-base/constants';

/** utils */
import { baseMessage } from '@module-base/utils';

/** hooks */
import { useCountdown } from '@module-base/hooks';

/** styles */
import { useStyles } from './styles';

/** types */
import type { FallbackDefaultProps } from '@module-base/models';

export default function ButtonRetry(props: Pick<FallbackDefaultProps, 'isAutoReload'>) {
    const { isAutoReload = true } = props;
    const classes = useStyles();
    const { formatMessage } = useIntl();

    const reloadWindow = React.useCallback(() => window.location.reload(), []);

    const { second } = useCountdown({ callback: reloadWindow, numberCountdown: timeCountdownError });

    const renderContent = React.useMemo(() => {
        return (
            <Button onClick={reloadWindow} variant="outlined" size="large" color="error">
                {formatMessage(baseMessage['module.base.error.fallback.retry'])}
            </Button>
        );
    }, []);

    return (
        <Stack className={classes.content}>
            {renderContent}
            {isAutoReload ? (
                <Typography variant="subtitle1" fontWeight={600} color="error.main" pt={3}>
                    {formatMessage(baseMessage['module.base.error.fallback.autoReload'], { second })}
                </Typography>
            ) : null}
        </Stack>
    );
}
