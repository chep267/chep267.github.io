/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import { useMutation, useQueryClient } from '@tanstack/react-query';

/** apis */
import { apiCreateMessage } from '@module-messenger/apis/Message';

/** utils */
import { baseMessage } from '@module-base/utils/messages';
import { genMessage } from '@module-messenger/utils/helpers/genMessage';

/** hooks */
import { useBase } from '@module-base/hooks/useBase';
import { useAuth } from '@module-auth/hooks/useAuth';
import { useCreateThread } from '@module-messenger/hooks/useCreateThread';

export function useSendMessage() {
    const queryClient = useQueryClient();
    const { me } = useAuth();
    const { notify } = useBase();
    const CREATE_THREAD = useCreateThread();
    const uid = `${me?.uid}`;

    const LIST_THREAD: any = queryClient.getQueryData(['useListThread', { uid }]);

    return useMutation({
        mutationFn: ({ tid, draft }: { tid: string; draft: any }) => {
            const data = genMessage({ tid, uid, ...draft });
            return apiCreateMessage({
                uid,
                tid,
                mid: data.mid,
                data,
            });
        },
        onSuccess: (_data, { tid }) => {
            if (!LIST_THREAD?.itemIds?.includes?.(tid)) {
                CREATE_THREAD.mutate({ tid });
            }
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
