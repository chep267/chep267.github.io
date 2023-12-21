/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

/** hooks */
import { useLanguage } from '@module-language/hooks/useLanguage';

/** types */
import type { ComponentType } from 'react';

function withLanguage<Props>(WrappedComponent: ComponentType<Props>) {
    return function EnhancedComponent(props: Props) {
        const language = useLanguage();
        return <WrappedComponent {...props} language={language} />;
    };
}

export { withLanguage };
