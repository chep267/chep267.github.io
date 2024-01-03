/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import { useQueryClient } from '@tanstack/react-query';

/** types */
import type { FetchQueryOptions } from '@tanstack/react-query';

export const usePrefetchQuery = (options: FetchQueryOptions) => {
    const queryClient = useQueryClient();

    // This happens in render, but is safe to do because ensureQueryData
    // only fetches if there is no data in the cache for this query. This
    // means we know no observers are watching the data so the side effect
    // is not observable, which is safe.
    queryClient.ensureQueryData(options).then();
};
