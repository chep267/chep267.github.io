/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

/** constants */
import { useCalendar } from './useCalendar.ts';

/** types */
import type { ComponentType } from '@module-base/models';

export function withCalendar<Props>(WrappedComponent: ComponentType<Props>) {
    return function EnhancedComponent(props: Props) {
        const calendar = useCalendar();
        return <WrappedComponent {...props} calendar={calendar} />;
    };
}
