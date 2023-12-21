/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

/** hooks */
import { useBase } from '@module-base/hooks/useBase.ts';

/** types */
import type { ComponentType } from 'react';

function withBase<Props>(WrappedComponent: ComponentType<Props>) {
    return function EnhancedComponent(props: Props) {
        const base = useBase();
        return <WrappedComponent {...props} base={base} />;
    };
}

export { withBase };
