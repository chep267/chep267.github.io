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

export function useListenListMessage() {
    const { me } = useAuth();
    const [itemIds, setItemIds] = React.useState(messengerDataDefault.data.threadIds);
    const [items, setItems] = React.useState(messengerDataDefault.data.threads);

    const LIST_MESSAGE = useQuery({
        queryKey: ['useListenListMessage'],
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
        ...LIST_MESSAGE,
        data: { itemIds, items, unsubscribe: LIST_MESSAGE.data?.unsubscribe },
    };
}
