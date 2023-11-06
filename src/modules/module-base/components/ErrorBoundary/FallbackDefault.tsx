/**
 *
 * @author dong.nguyenthanh@powergatesoftware.com on 26/07/2023.
 *
 */

import * as React from 'react';
import { FormattedMessage } from 'react-intl';

/** mui components */
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

/** constants */
import { SECOND_COUNT_DOWN_ERROR } from '@module-base/constants/defaultValue';

/** utils */
import { baseMessage } from '@module-base/utils/messages';
import Logo from '@module-base/assets/error.jpeg';

/** hooks */
import { useCountdown } from '@module-base/hooks/useCountdown';

/** styles */
import useStyles from './styles';

/** components lazy */
const Particle = React.lazy(() => import('@module-base/components/Particles'));

function FallbackDefault({ isAutoReload }: { isAutoReload: boolean }) {
    const classes = useStyles();

    const reloadWindow = React.useCallback(() => window.location.reload(), []);

    const { second } = useCountdown({ callback: reloadWindow, numberCountdown: SECOND_COUNT_DOWN_ERROR });

    return (
        <Stack className={classes.fallback}>
            <Stack className={classes.content}>
                <img src={Logo} alt="err" />
                <Typography variant="h1" fontWeight={600} color="error.main">
                    <FormattedMessage {...baseMessage['module.base.error.fallback.title']} />
                </Typography>

                <Typography variant="h6" fontWeight={600} py={2} color="error.main">
                    <FormattedMessage {...baseMessage['module.base.error.fallback.content']} />
                </Typography>

                <Button onClick={reloadWindow} variant="outlined" size="large" color="error">
                    <FormattedMessage {...baseMessage['module.base.error.fallback.retry']} />
                </Button>

                {isAutoReload ? (
                    <Typography variant="subtitle1" fontWeight={600} color="error.main" pt={3}>
                        <FormattedMessage {...baseMessage['module.base.error.fallback.autoReload']} values={{ second }} />
                    </Typography>
                ) : null}
            </Stack>

            <React.Suspense fallback={null}>
                <Particle />
            </React.Suspense>
        </Stack>
    );
}

export default FallbackDefault;
