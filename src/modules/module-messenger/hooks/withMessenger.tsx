/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

/** hooks */
import { useMessenger } from '@module-messenger/hooks/useMessenger';

/** types */
import type { ComponentType } from '@module-base/models';

export function withMessenger<Props>(WrappedComponent: ComponentType<Props>) {
    return function EnhancedComponent(props: Props) {
        const messenger = useMessenger();
        return <WrappedComponent {...props} messenger={messenger} />;
    };
}
