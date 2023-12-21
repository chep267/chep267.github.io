/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

/** hooks */
import { useTheme } from '@module-theme/hooks/useTheme';

/** types */
import type { ComponentType } from 'react';

function withTheme<Props>(WrappedComponent: ComponentType<Props>) {
    return function EnhancedComponent(props: Props) {
        const theme = useTheme();
        return <WrappedComponent {...props} theme={theme} />;
    };
}

export { withTheme };
