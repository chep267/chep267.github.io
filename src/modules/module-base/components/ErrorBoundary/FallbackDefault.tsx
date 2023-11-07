/**
 *
 * @author dong.nguyenthanh@powergatesoftware.com on 26/07/2023.
 *
 */

import * as React from 'react';
import { useIntl } from 'react-intl';

/** lib components */
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

/** constants */
import { SECOND_COUNT_DOWN_ERROR } from '@module-base/constants/defaultValue';

/** utils */
import { baseMessage } from '@module-base/utils/messages';

/** hooks */
import { useCountdown } from '@module-base/hooks/useCountdown';

/** styles */
import useStyles from './styles';

/** types */
import type { FallbackDefaultProps } from '@module-base/models';
import IconBase from '@module-base/components/IconBase';

/** lazy components */
const Particle = React.lazy(() => import('@module-base/components/Particles'));

export default function FallbackDefault(props: FallbackDefaultProps) {
    const { isAutoReload } = props;
    const classes = useStyles();
    const { formatMessage } = useIntl();

    const reloadWindow = React.useCallback(() => window.location.reload(), []);

    const { second } = useCountdown({ callback: reloadWindow, numberCountdown: SECOND_COUNT_DOWN_ERROR });

    return (
        <Stack className={classes.fallback}>
            <Stack className={classes.content}>
                <IconBase name="error" width={237} height={213} />

                <Typography variant="h1" fontWeight={600} color="error.main">
                    {formatMessage(baseMessage['module.base.error.fallback.title'])}
                </Typography>

                <Typography variant="h6" fontWeight={600} py={2} color="error.main">
                    {formatMessage(baseMessage['module.base.error.fallback.content'])}
                </Typography>

                <Button onClick={reloadWindow} variant="outlined" size="large" color="error">
                    {formatMessage(baseMessage['module.base.error.fallback.retry'])}
                </Button>

                {isAutoReload ? (
                    <Typography variant="subtitle1" fontWeight={600} color="error.main" pt={3}>
                        {formatMessage(baseMessage['module.base.error.fallback.autoReload'], { second })}
                    </Typography>
                ) : null}
            </Stack>

            <React.Suspense fallback={null}>
                <Particle />
            </React.Suspense>
        </Stack>
    );
}
