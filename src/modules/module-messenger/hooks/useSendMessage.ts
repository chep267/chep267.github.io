/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import { useMutation } from '@tanstack/react-query';

/** apis */
import { apiCreateThread } from '@module-messenger/apis';

/** utils */
import { baseMessage } from '@module-base/utils/messages';

/** hooks */
import { useBase } from '@module-base/hooks/useBase';
import { useAuth } from '@module-auth/hooks/useAuth';

/** types */
import type { DocumentTypeThreadData } from '@module-messenger/models';

type Props = { onSuccess?(tid: string): void };

export function useSendMessage(props?: Props) {
    const { onSuccess } = props ?? {};
    const { me } = useAuth();
    const { notify } = useBase();

    return useMutation({
        mutationFn: ({ tid, name, type, members }: DocumentTypeThreadData) => {
            return apiCreateThread({
                uid: me!.uid,
                tid,
                data: { tid, name, type, members },
            });
        },
        onSuccess: (_data, variables) => onSuccess?.(variables.tid),
        onError: () => {
            notify.toggleNotify({
                open: true,
                mode: 'error',
                intlMessage: baseMessage['module.base.error.server.busy'],
            });
        },
    });
}
