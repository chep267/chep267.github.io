/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import * as React from 'react';
import { useIntl } from 'react-intl';

/** lib components */
import { Stack, Typography } from '@mui/material';

/** components */
import { IconBase } from '@module-base/components';
import ButtonRetry from './ButtonRetry';

/** utils */
import { baseMessage } from '@module-base/utils/messages';

/** styles */
import { useStyles } from './styles';

/** types */
import type { FallbackDefaultProps } from '@module-base/models';

/** lazy components */
const Particle = React.lazy(() => import('@module-base/components/Particles'));

export default function FallbackDefault(props: FallbackDefaultProps) {
    const { isAutoReload } = props;
    const classes = useStyles();
    const { formatMessage } = useIntl();

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
                <ButtonRetry isAutoReload={isAutoReload} />
            </Stack>
            <React.Suspense fallback={null}>
                <Particle />
            </React.Suspense>
        </Stack>
    );
}
