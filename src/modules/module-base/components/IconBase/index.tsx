/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import * as React from 'react';

/** lib components */
import Skeleton from '@mui/material/Skeleton';

/** types */
import type { IconBaseProps, TypeIcons } from '@module-base/models';

const Icons: TypeIcons = Object.freeze({
    /** app icon */
    appLogo: React.lazy(() => import('./svg/AppLogo')),

    error: React.lazy(() => import('./svg/Error')),
    notFound: React.lazy(() => import('./svg/NotFound')),
});

const IconBase = React.memo((props: IconBaseProps) => {
    const { name, size = 24, viewBox = '0 0 24 24', ...iconProps } = props;
    const Icon = Icons[name];

    return (
        <React.Suspense fallback={<Skeleton width={size} height={size} variant="circular" />}>
            <Icon name={name} width={size} height={size} viewBox={viewBox} {...iconProps} />
        </React.Suspense>
    );
});

IconBase.displayName = 'IconBase';
export default IconBase;
