/**
 *
 * @author dong.nguyenthanh@powergatesoftware.com on 26/07/2023.
 *
 */

import * as React from 'react';

/** lib components */
import Skeleton from '@mui/material/Skeleton';

/** types */
import type { LazyExoticComponent } from 'react';
import type { IconBaseProps, IconBaseType } from '@module-base/models';

const Icons: Readonly<Record<IconBaseType, LazyExoticComponent<(props: IconBaseProps) => JSX.Element>>> = Object.freeze({
    /** app icon */
    appLogo: React.lazy(() => import('./svg/AppLogo')),
});

const IconBase = React.memo((props: IconBaseProps) => {
    const { name, size = 24, viewBox = '0 0 24 24', ...iconProps } = props;
    const Icon = Icons[name];

    return (
        <React.Suspense fallback={<Skeleton width={24} height={24} variant="circular" />}>
            <Icon name={name} width={size} viewBox={viewBox} height={size} {...iconProps} />
        </React.Suspense>
    );
});

IconBase.displayName = 'IconBase';
export default IconBase;
