/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

/** types */
import type { TypeNotify } from '@module-base/models';

export const dataNotifyContextDefault = Object.freeze<TypeNotify>({
    open: false,
    message: '',
    mode: undefined,
    close: false,
    duration: undefined,
});
