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

/** types */
import type { TypeItemIds, TypeItems } from '@module-base/models';
import type { TypeThreadData } from '@module-messenger/models';

export function useListThread() {
    const { me } = useAuth();
    const [itemIds, setItemIds] = React.useState<TypeItemIds>([]);
    const [items, setItems] = React.useState<TypeItems<TypeThreadData>>({});

    const LIST_THREAD = useQuery({
        queryKey: ['useListThread'],
        queryFn: () => {
            return apiGetListThread({
                uid: me!.uid,
                fnCallback: (data) => {
                    setItemIds(data.itemIds);
                    setItems(data.items);
                },
            });
        },
        enabled: !!me!.uid,
        refetchOnWindowFocus: false,
    });

    return {
        ...LIST_THREAD,
        data: { itemIds, items, unsubscribe: LIST_THREAD.data?.unsubscribe },
    };
}
