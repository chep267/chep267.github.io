/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

/** hooks */
import { useAuth } from './useAuth.ts';

/** types */
import type { ComponentType } from '@module-base/models';

export function withAuth<Props>(WrappedComponent: ComponentType<Props>) {
    return function EnhancedComponent(props: Props) {
        const auth = useAuth();
        return <WrappedComponent {...props} auth={auth} />;
    };
}
