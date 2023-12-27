/**
 *
 * @author dong.nguyenthanh@powergatesoftware.com on 26/07/2023.
 *
 */

import { useMutation } from '@tanstack/react-query';

/** apis */
import { apiRegister } from '@module-auth/apis';

/** constants */
import { emailLocalKey } from '@module-base/constants/localStoreKey';
import { AUTH_ERROR_CODES } from '@module-auth/constants/error';

/** utils */
import { Encrypt } from '@module-base/utils/security';
import { localStorageBase } from '@module-base/utils/storages';
import { authMessage } from '@module-auth/utils/messages';

/** hooks */
import { useNotify } from '@module-base/hooks/useNotify';

/** types */
import type { FirebaseError } from 'firebase/app';

export function useRegister() {
    const NOTIFY = useNotify();

    return useMutation({
        mutationFn: apiRegister,
        onSuccess: (_response, { email }) => {
            localStorageBase.set(emailLocalKey, Encrypt(email));
            NOTIFY.method.toggleNotify({
                open: true,
                mode: 'success',
                intlMessage: authMessage[`module.auth.form.status.register.success`],
            });
        },
        onError: (error: FirebaseError) => {
            const code = error?.code === AUTH_ERROR_CODES.EMAIL_EXISTS ? 'exist' : 'fail';
            NOTIFY.method.toggleNotify({
                open: true,
                mode: 'error',
                intlMessage: authMessage[`module.auth.form.status.register.${code}`],
            });
        },
    });
}
