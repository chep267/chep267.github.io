/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import { useMutation, useQueryClient } from '@tanstack/react-query';

/** apis */
import { apiCreateThread } from '@module-messenger/apis';

/** utils */
import { baseMessage } from '@module-base/utils/messages';
import { checkUid } from '@module-user/utils/helpers/checkUid';

/** hooks */
import { useBase } from '@module-base/hooks/useBase';
import { useAuth } from '@module-auth/hooks/useAuth';

/** types */
import type { UserInfo } from '@firebase/auth';
import type { TypeDocumentThreadData } from '@module-messenger/models';

export function useCreateThread() {
    const queryClient = useQueryClient();
    const { me } = useAuth();
    const { notify } = useBase();
    const uid = `${me?.uid}`;

    return useMutation({
        mutationFn: (payload: Partial<Omit<TypeDocumentThreadData, 'tid'>> & Pick<TypeDocumentThreadData, 'tid'>) => {
            const { tid, name, type, members } = payload;
            const LIST_USER: any = queryClient.getQueryData(['useListUser', { uid }]);
            const partnerId = checkUid(tid);
            const partner: UserInfo = LIST_USER?.items?.[partnerId];

            console.log('CREATE_THREAD: ', partner);
            return apiCreateThread({
                uid: me!.uid,
                tid,
                data: {
                    tid,
                    name: name || partner?.displayName || '',
                    type: type || 'thread',
                    members: members || [uid, partnerId],
                },
            });
        },
        onError: (error) => {
            console.log('error: ', error);
            notify.toggleNotify({
                open: true,
                mode: 'error',
                intlMessage: baseMessage['module.base.error.server.busy'],
            });
        },
    });
}
