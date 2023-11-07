/**
 *
 * @author minh.nguyenquang@powergatesoftware.com on 26/07/2023.
 *
 */

import * as React from 'react';

/** lib components */
import { Stack } from '@mui/material';

/** components */
import IconBase from '@module-base/components/IconBase';

/** styles */
import useStyles from './styles';

/** lazy components */
const Particle = React.lazy(() => import('@module-base/components/Particles'));

export default function NotFoundScreen() {
    const classes = useStyles();

    return (
        <Stack className={classes.layout}>
            <Stack className={classes.notFound}>
                <IconBase name="notFound" width="100%" height="100%" />
            </Stack>
            <React.Suspense fallback={null}>
                <Particle />
            </React.Suspense>
        </Stack>
    );
}
