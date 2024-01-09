/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

/** hooks */
import { useLanguage } from './useLanguage.ts';

/** types */
import type { ComponentType } from '@module-base/models';

export function withLanguage<Props>(WrappedComponent: ComponentType<Props>) {
    return function EnhancedComponent(props: Props) {
        const language = useLanguage();
        return <WrappedComponent {...props} language={language} />;
    };
}
