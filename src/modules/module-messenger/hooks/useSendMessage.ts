/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import { useMutation } from '@tanstack/react-query';

/** apis */
import { apiCreateMessage, apiSendFile } from '@module-messenger/apis/Message';

/** constants */
import { MESSENGER_CHAT_BOT_AI_ID } from '@module-messenger/constants/ref';
import { MessageGPT } from '@module-messenger/constants/chatGPT';

/** utils */
import { baseMessage } from '@module-base/utils/messages';
import { checkId } from '@module-base/utils/helpers/checkId';
import { genMessage } from '@module-messenger/utils/helpers/genMessage';

/** hooks */
import { useNotify } from '@module-base/hooks/useNotify';
import { useAuth } from '@module-auth/hooks/useAuth';
import { useCreateThread } from '@module-messenger/hooks/useCreateThread';

/** types */
import type { TypeDocumentMessageData } from '@module-messenger/models';

export function useSendMessage() {
    const AUTH = useAuth();
    const NOTIFY = useNotify();
    const CREATE_THREAD = useCreateThread();
    const uid = AUTH.data.me.uid;

    return useMutation({
        mutationFn: async ({ tid, draft }: { tid: string; draft: TypeDocumentMessageData }) => {
            const data = genMessage({ ...draft, tid, uid, isEncrypt: true });
            if (draft.fileIds.length) {
                /** send file */
                const response = await Promise.all(
                    draft.fileIds.map((fid) => apiSendFile({ tid, mid: data.mid, fid, file: draft.files![fid] }))
                );
                const files: TypeDocumentMessageData['files'] = {};
                response?.map((value) => {
                    if (value) {
                        files[value.fid] = {
                            ...draft.files[value.fid],
                            fileData: null,
                            url: value.url,
                        };
                    }
                });
                data.files = files;
            }
            /** send for me */
            return apiCreateMessage({
                uid,
                tid,
                mid: data.mid,
                data,
            });
        },
        onSuccess: ({ message }, { tid }) => {
            if (tid === MESSENGER_CHAT_BOT_AI_ID) {
                /** chatbot reply */
                const arrText = MessageGPT['random'];
                const text = arrText[Math.floor(Math.random() * arrText.length)];
                const dataGPT = genMessage({ tid, uid: tid, text, isEncrypt: true });
                apiCreateMessage({
                    uid,
                    tid,
                    mid: dataGPT.mid,
                    data: dataGPT,
                }).then();
            } else {
                /** send for partner */
                const p_uid = checkId(tid, 'uid');
                const p_tid = checkId(uid, 'tid');
                apiCreateMessage({
                    uid: p_uid,
                    tid: p_tid,
                    mid: message.mid,
                    data: message,
                }).then();
            }

            /** update for thread */
            CREATE_THREAD.mutate({
                tid,
                lastMessage: message,
            });
        },
        onError: (error) => {
            console.log('error: ', error);
            NOTIFY.method.toggleNotify({
                open: true,
                mode: 'error',
                intlMessage: baseMessage['module.base.error.server.busy'],
            });
        },
    });
}
