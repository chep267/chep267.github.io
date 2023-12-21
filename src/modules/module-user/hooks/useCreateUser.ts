/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import { useMutation } from '@tanstack/react-query';

/** apis */
import { apiCreateUser } from '@module-user/apis';

/** utils */
import { baseMessage } from '@module-base/utils/messages';

/** hooks */
import { useBase } from '@module-base/hooks/useBase';

export function useCreateUser() {
    const { notify } = useBase();

    return useMutation({
        mutationFn: apiCreateUser,
        onSuccess: () => {
            notify.toggleNotify({
                open: true,
                mode: 'success',
                message: 'ok',
            });
        },
        onError: () => {
            notify.toggleNotify({
                open: true,
                mode: 'error',
                intlMessage: baseMessage['module.base.error.server.busy'],
            });
        },
    });
}
