/**
 *
 * @author dong.nguyenthanh@powergatesoftware.com on 26/07/2023.
 *
 */

import * as React from 'react';

/** mui components */
import Skeleton from '@mui/material/Skeleton';

/** types */
import type { SVGProps, LazyExoticComponent, RefObject } from 'react';

type IconBaseType = keyof typeof Icons;

interface IconBaseProps extends SVGProps<SVGSVGElement> {
    name: IconBaseType;
    size?: number;
    ref?: ((instance: SVGSVGElement | null) => void) | RefObject<SVGSVGElement> | null;
}

const Icons = Object.freeze({
    /** app icon */
    appLogo: React.lazy(() => import('./svg/AppLogo')),
});

const IconBase = React.memo((props: IconBaseProps) => {
    const { name, size = 24, viewBox = '0 0 24 24', ...iconProps } = props;
    const Icon: LazyExoticComponent<(props: IconBaseProps) => JSX.Element> = Icons[name];

    return (
        <React.Suspense fallback={<Skeleton width={24} height={24} variant="circular" />}>
            <Icon name={name} width={size} viewBox={viewBox} height={size} {...iconProps} />
        </React.Suspense>
    );
});

IconBase.displayName = 'IconBase';

export type { IconBaseProps, IconBaseType };
export default IconBase;
