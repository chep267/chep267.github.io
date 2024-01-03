/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import * as React from 'react';
import { useQuery } from '@tanstack/react-query';

/** apis */
import { apiOnGetListMessage } from '@module-messenger/apis';

/** constants */
import { emptyArray, emptyFunction, emptyObject } from '@module-base/constants';

/** hooks */
import { useAuth } from '@module-auth/hooks/useAuth';

/** types */
import type { Unsubscribe } from 'firebase/firestore';
import type { TypeItemIds, TypeItems } from '@module-base/models';
import type { TypeDocumentMessageData } from '@module-messenger/models';

export function useListenListMessage({ tid }: { tid: string }) {
    const AUTH = useAuth();
    const [itemIds, setItemIds] = React.useState<TypeItemIds>(emptyArray);
    const [items, setItems] = React.useState<TypeItems<TypeDocumentMessageData>>(emptyObject);
    const uid = AUTH.data.me.uid;
    const listen = React.useRef<{ unsubscribe?: Unsubscribe }>({ unsubscribe: emptyFunction });

    const LIST_MESSAGE = useQuery({
        queryKey: ['useListenListMessage', { tid }],
        queryFn: async () => {
            listen.current?.unsubscribe?.();
            const response = await apiOnGetListMessage({
                tid: `${tid}`,
                uid,
                fnCallback: (data) => {
                    setItemIds(data.itemIds);
                    setItems(data.items);
                },
            });
            listen.current.unsubscribe = response?.unsubscribe;
            return response;
        },
        enabled: !!tid,
        refetchOnWindowFocus: false,
    });

    return {
        ...LIST_MESSAGE,
        data: { itemIds, items },
    };
}
