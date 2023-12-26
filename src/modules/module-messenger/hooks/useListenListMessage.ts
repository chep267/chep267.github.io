/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import * as React from 'react';
import { useQuery } from '@tanstack/react-query';

/** apis */
import { apiOnGetListMessage } from '@module-messenger/apis/Message';

/** constants */
import { emptyArray, emptyObject } from '@module-base/constants/defaultValue';

/** hooks */
import { useAuth } from '@module-auth/hooks/useAuth';

/** types */
import type { TypeItemIds, TypeItems } from '@module-base/models';
import type { TypeDocumentMessageData } from '@module-messenger/models';

export function useListenListMessage({ tid }: { tid?: string }) {
    const AUTH = useAuth();
    const [itemIds, setItemIds] = React.useState<TypeItemIds>(emptyArray);
    const [items, setItems] = React.useState<TypeItems<TypeDocumentMessageData>>(emptyObject);
    const uid = AUTH.data.me.uid;

    const LIST_MESSAGE = useQuery({
        queryKey: ['useListenListMessage', { tid }],
        queryFn: () => {
            return apiOnGetListMessage({
                tid: `${tid}`,
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
        if (uid && tid) {
            LIST_MESSAGE.refetch().then();
        }
        return () => {
            LIST_MESSAGE.data?.unsubscribe?.();
        };
    }, [uid, tid]);

    return {
        ...LIST_MESSAGE,
        data: { itemIds, items },
    };
}
