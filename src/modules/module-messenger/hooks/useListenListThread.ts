/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import * as React from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';

/** apis */
import { apiOnGetListThread } from '@module-messenger/apis';

/** constants */
import { emptyArray, emptyObject } from '@module-base/constants/defaultValue';

/** hooks */
import { useAuth } from '@module-auth/hooks/useAuth.ts';

/** types */
import type { TypeItemIds, TypeItems } from '@module-base/models';
import type { TypeThreadData } from '@module-messenger/models';

export function useListenListThread() {
    const queryClient = useQueryClient();
    const {
        data: { me },
    } = useAuth();
    const [itemIds, setItemIds] = React.useState<TypeItemIds>(emptyArray);
    const [items, setItems] = React.useState<TypeItems<TypeThreadData>>(emptyObject);
    const uid = `${me?.uid}`;

    const LIST_THREAD = useQuery({
        queryKey: ['useListenListThread', { uid }],
        queryFn: () => {
            return apiOnGetListThread({
                uid,
                fnCallback: (data) => {
                    setItemIds(data.itemIds);
                    setItems(data.items);
                },
            });
        },
        enabled: false,
        refetchOnWindowFocus: false,
    });

    React.useEffect(() => {
        if (uid) {
            LIST_THREAD.refetch().then();
        }
        return () => {
            LIST_THREAD.data?.unsubscribe?.();
        };
    }, [uid]);

    React.useEffect(() => {
        queryClient.setQueryData(['useListThread', { uid }], {
            itemIds,
            items,
        });
    }, [itemIds, items]);

    return {
        ...LIST_THREAD,
        data: { itemIds, items },
    };
}
