/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import { useMutation } from '@tanstack/react-query';
import { useIntl } from 'react-intl';

/** utils */
import { baseMessage } from '@module-base/utils/messages';

/** hooks */
import { useBase } from '@module-base/hooks/useBase';
import { apiCreateUser } from '@module-user/apis';

export function useCreateUser() {
    const intl = useIntl();
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
                message: intl.formatMessage(baseMessage['module.base.error.server.busy']),
            });
        },
    });
}
