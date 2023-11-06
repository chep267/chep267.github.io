/**
 *
 * @author dong.nguyenthanh@powergatesoftware.com on 26/07/2023.
 *
 */

import { useMutation } from '@tanstack/react-query';
import { useIntl } from 'react-intl';

/** apis */
import { recoverApi } from '@module-auth/apis';

/** constants */
import { AUTH_ERROR_CODES } from '@module-auth/constants/error';

/** utils */
import { useBase } from '@module-base/hooks/useBase';
import { authMessage } from '@module-auth/utils/messages';

export function useRecover() {
    const intl = useIntl();
    const { notify } = useBase();

    return useMutation({
        mutationFn: recoverApi,
        onSuccess: () => {
            notify.toggleNotify({
                open: true,
                mode: 'success',
                message: intl.formatMessage(authMessage[`module.auth.form.status.recover.success`]),
            });
        },
        onError: (error) => {
            // @ts-ignore
            const code = error?.code === AUTH_ERROR_CODES.USER_DELETED ? 'recover.fail' : 'server.busy';
            notify.toggleNotify({
                open: true,
                mode: 'error',
                message: intl.formatMessage(authMessage[`module.auth.form.status.${code}`]),
            });
        },
    });
}
