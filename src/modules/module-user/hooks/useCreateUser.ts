/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import { useMutation } from '@tanstack/react-query';

/** apis */
import { apiCreateUser } from '@module-user/apis';

/** utils */
import { baseMessage } from '@module-base/utils';

/** hooks */
import { useNotify } from '@module-base/hooks';

export function useCreateUser() {
    const NOTIFY = useNotify();

    return useMutation({
        mutationFn: apiCreateUser,
        onSuccess: () => {
            NOTIFY.method.toggleNotify({
                open: true,
                mode: 'success',
                message: 'ok',
            });
        },
        onError: () => {
            NOTIFY.method.toggleNotify({
                open: true,
                mode: 'error',
                intlMessage: baseMessage['module.base.error.server.busy'],
            });
        },
    });
}
