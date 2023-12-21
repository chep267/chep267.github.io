/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import { useMutation, useQueryClient } from '@tanstack/react-query';

/** apis */
import { apiCreateMessage } from '@module-messenger/apis/Message';

/** constants */
import { MESSENGER_CHAT_BOT_AI_ID } from '@module-messenger/constants/ref';
import { MessageGPT } from '@module-messenger/constants/chatGPT';

/** utils */
import { baseMessage } from '@module-base/utils/messages';
import { genMessage } from '@module-messenger/utils/helpers/genMessage';

/** hooks */
import { useBase } from '@module-base/hooks/useBase';
import { useAuth } from '@module-auth/hooks/useAuth';
import { useCreateThread } from '@module-messenger/hooks/useCreateThread';

/** types */
import type { TypeDocumentMessageData } from '@module-messenger/models';

export function useSendMessage() {
    const queryClient = useQueryClient();
    const {
        data: { me },
    } = useAuth();
    const { notify } = useBase();
    const CREATE_THREAD = useCreateThread();
    const uid = `${me?.uid}`;

    const LIST_THREAD: any = queryClient.getQueryData(['useListThread', { uid }]);

    return useMutation({
        mutationFn: ({ tid, draft }: { tid: string; draft: Partial<TypeDocumentMessageData> }) => {
            const data = genMessage({ ...draft, tid, uid });
            return apiCreateMessage({
                uid,
                tid,
                mid: data.mid,
                data,
            }).then(() => {
                if (tid === MESSENGER_CHAT_BOT_AI_ID) {
                    const arrText = MessageGPT['random'];
                    const text = arrText[Math.floor(Math.random() * arrText.length)];
                    const dataGPT = genMessage({ tid, uid: tid, text });
                    return apiCreateMessage({
                        uid,
                        tid,
                        mid: dataGPT.mid,
                        data: dataGPT,
                    });
                }
            });
        },
        onSuccess: (_data, { tid }) => {
            if (!LIST_THREAD?.itemIds?.includes?.(tid)) {
                CREATE_THREAD.mutate({ tid });
            }
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
