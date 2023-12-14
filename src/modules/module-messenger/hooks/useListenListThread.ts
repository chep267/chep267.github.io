/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import * as React from 'react';
import { useQuery } from '@tanstack/react-query';

/** apis */
import { apiGetListThread } from '@module-messenger/apis';

/** hooks */
import { useAuth } from '@module-auth/hooks/useAuth';
import { messengerDataDefault } from '@module-messenger/hooks/useMessenger';

export function useListenListThread() {
    const { me } = useAuth();
    const [itemIds, setItemIds] = React.useState(messengerDataDefault.data.threadIds);
    const [items, setItems] = React.useState(messengerDataDefault.data.threads);

    const LIST_THREAD = useQuery({
        queryKey: ['useListenListThread', { uid: me?.uid }],
        queryFn: () => {
            return apiGetListThread({
                uid: me!.uid,
                fnCallback: (data) => {
                    setItemIds(data.itemIds);
                    setItems(data.items);
                },
            });
        },
        enabled: !!me?.uid,
        refetchOnWindowFocus: false,
    });

    return {
        ...LIST_THREAD,
        data: { itemIds, items, unsubscribe: LIST_THREAD.data?.unsubscribe },
    };
}
