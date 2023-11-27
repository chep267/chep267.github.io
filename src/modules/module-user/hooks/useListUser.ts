/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import { useQuery } from '@tanstack/react-query';

/** apis */
import { apiGetListUser } from '@module-user/apis';

/** types */

export function useListUser() {
    return useQuery({
        queryKey: ['useListUser'],
        queryFn: () => apiGetListUser({}),
        refetchOnWindowFocus: false,
    });
}
