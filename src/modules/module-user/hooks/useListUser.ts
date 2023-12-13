/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import { useQuery, useQueryClient } from '@tanstack/react-query';

/** apis */
import { apiGetListUser } from '@module-user/apis';

/** types */

export function useListUser() {
    const queryClient = useQueryClient();
    const data = queryClient.getQueryData(['useListUser']);

    return useQuery({
        queryKey: ['useListUser'],
        queryFn: () => apiGetListUser({}),
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        enabled: !data,
    });
}
