/**
 *
 * @author dong.nguyenthanh@powergatesoftware.com on 26/07/2023.
 *
 */

/** types */
import type { RefObject, SVGProps } from 'react';

type IconSVGProps = SVGProps<SVGSVGElement>;

type IconBaseType = 'appLogo';

interface IconBaseProps extends SVGProps<SVGSVGElement> {
    name: IconBaseType;
    size?: number;
    ref?: ((instance: SVGSVGElement | null) => void) | RefObject<SVGSVGElement> | null;
}

export type { IconBaseProps, IconBaseType, IconSVGProps };
