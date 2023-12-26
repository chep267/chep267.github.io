/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import { useQuery, useQueryClient } from '@tanstack/react-query';

/** apis */
import { apiGetListUser } from '@module-user/apis';

/** hooks */
import { useAuth } from '@module-auth/hooks/useAuth';

export function useListUser() {
    const queryClient = useQueryClient();
    const AUTH = useAuth();
    const uid = AUTH.data.me.uid;
    const data = queryClient.getQueryData(['useListUser', { uid }]);

    return useQuery({
        queryKey: ['useListUser', { uid }],
        queryFn: () => apiGetListUser({}),
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        enabled: !!uid && !data,
    });
}
