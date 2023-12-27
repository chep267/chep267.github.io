/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import { useMutation } from '@tanstack/react-query';

/** apis */
import { apiRecover } from '@module-auth/apis';

/** constants */
import { AUTH_ERROR_CODES } from '@module-auth/constants/error';

/** utils */
import { authMessage } from '@module-auth/utils/messages';

/** hooks */
import { useNotify } from '@module-base/hooks/useNotify';

/** types */
import type { FirebaseError } from '@firebase/app';

export function useRecover() {
    const NOTIFY = useNotify();

    return useMutation({
        mutationFn: apiRecover,
        onSuccess: () => {
            NOTIFY.method.toggleNotify({
                open: true,
                mode: 'success',
                intlMessage: authMessage[`module.auth.form.status.recover.success`],
            });
        },
        onError: (error: FirebaseError) => {
            const code = error?.code === AUTH_ERROR_CODES.USER_DELETED ? 'recover.fail' : 'server.busy';
            NOTIFY.method.toggleNotify({
                open: true,
                mode: 'error',
                intlMessage: authMessage[`module.auth.form.status.${code}`],
            });
        },
    });
}
