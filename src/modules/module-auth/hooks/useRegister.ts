/**
 *
 * @author dong.nguyenthanh@powergatesoftware.com on 26/07/2023.
 *
 */

import { useMutation } from '@tanstack/react-query';
import { useIntl } from 'react-intl';

/** apis */
import { registerApi } from '@module-auth/apis';

/** constants */
import { emailLocalKey } from '@module-base/constants/localStoreKey';
import { AUTH_ERROR_CODES } from '@module-auth/constants/error';

/** utils */
import { Encrypt } from '@module-base/utils/security';
import { localStorageBase } from '@module-base/utils/storages';
import { useBase } from '@module-base/hooks/useBase';
import { authMessage } from '@module-auth/utils/messages';

export function useRegister() {
    const intl = useIntl();
    const { notify } = useBase();

    return useMutation({
        mutationFn: registerApi,
        onSuccess: (_response, { email }) => {
            localStorageBase.set(emailLocalKey, Encrypt(email));
            notify.toggleNotify({
                open: true,
                mode: 'success',
                message: intl.formatMessage(authMessage[`module.auth.form.status.register.success`]),
            });
        },
        onError: (error) => {
            // @ts-ignore
            const code = error?.code === AUTH_ERROR_CODES.EMAIL_EXISTS ? 'exist' : 'fail';
            notify.toggleNotify({
                open: true,
                mode: 'error',
                message: intl.formatMessage(authMessage[`module.auth.form.status.register.${code}`]),
            });
        },
    });
}
