/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

/** types */
import type { LazyExoticComponent, RefObject, SVGProps } from 'react';

type IconSVGProps = SVGProps<SVGSVGElement>;

type TypeIconBase = 'appLogo' | 'error' | 'notFound';

interface IconBaseProps extends SVGProps<SVGSVGElement> {
    name: TypeIconBase;
    size?: number;
    ref?: ((instance: SVGSVGElement | null) => void) | RefObject<SVGSVGElement> | null;
}

type TypeIcons = Readonly<Record<TypeIconBase, LazyExoticComponent<(props: IconBaseProps) => JSX.Element>>>;

export type { IconBaseProps, TypeIconBase, IconSVGProps, TypeIcons };
