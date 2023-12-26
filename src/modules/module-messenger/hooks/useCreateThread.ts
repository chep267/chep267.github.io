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
import { checkId } from '@module-base/utils/helpers/checkId';

/** hooks */
import { useBase } from '@module-base/hooks/useBase';
import { useAuth } from '@module-auth/hooks/useAuth';

/** types */
import type { TypeDocumentThreadData } from '@module-messenger/models';
import type { TypeItemIds, TypeItems } from '@module-base/models';

type TypeListThread =
    | {
          itemIds: TypeItemIds;
          items: TypeItems<TypeDocumentThreadData>;
      }
    | undefined;

export function useCreateThread() {
    const queryClient = useQueryClient();
    const AUTH = useAuth();
    const { notify } = useBase();
    const uid = AUTH.data.me.uid;
    const LIST_THREAD: TypeListThread = queryClient.getQueryData(['useListThread', { uid }]);

    return useMutation({
        mutationFn: (payload: TypeDocumentThreadData) => {
            const { tid } = payload;
            const p_uid = checkId(tid, 'uid');
            const p_tid = checkId(uid, 'tid');
            let data: TypeDocumentThreadData = { ...payload };

            if (LIST_THREAD?.itemIds?.includes?.(tid)) {
                const thread = LIST_THREAD?.items?.[tid];
                data = {
                    ...thread,
                    ...data,
                };
            }

            return Promise.all([
                /** create for me */
                apiCreateThread({
                    uid,
                    tid,
                    data: {
                        type: 'thread',
                        members: [uid, p_uid],
                        ...data,
                    },
                }),
                /** create for partner */
                apiCreateThread({
                    uid: p_uid,
                    tid: p_tid,
                    data: {
                        members: [uid, p_uid],
                        ...data,
                        tid: p_tid,
                    },
                }),
            ]);
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
