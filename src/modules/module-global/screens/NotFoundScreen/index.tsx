/**
 *
 * @author minh.nguyenquang@powergatesoftware.com on 26/07/2023.
 *
 */

import * as React from 'react';
import { Stack } from '@mui/material';

/** images */
import Cover from '@module-base/assets/404.jpg';

/** styles */
import useStyles from './styles';

/** lazy components */
const Particle = React.lazy(() => import('@module-base/components/Particles'));

export default function NotFoundScreen() {
    const classes = useStyles();

    return (
        <Stack className={classes.layout}>
            <Stack className={classes.notFound}>
                <img src={Cover} alt="" />
            </Stack>
            <React.Suspense fallback={null}>
                <Particle />
            </React.Suspense>
        </Stack>
    );
}
