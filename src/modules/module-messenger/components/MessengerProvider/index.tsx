/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import * as React from 'react';

/** constants */
import { emptyObject } from '@module-base/constants/defaultValue';

/** hooks */
import { MessengerContext } from '@module-messenger/hooks/useMessenger';

/** types */
import type { PropsWithChildren } from 'react';
import type { MessengerContextProps } from '@module-messenger/models';

export default function MessengerProvider(props: PropsWithChildren) {
    const { children } = props;

    const [openThreadInfo, setOpenThreadInfo] = React.useState(true);
    const [drafts, setDrafts] = React.useState<MessengerContextProps['ui']['drafts']>(emptyObject);

    const store = React.useMemo<MessengerContextProps>(
        () => ({
            ui: {
                openThreadInfo,
                drafts,
            },
            method: {
                setDrafts,
                setOpenThreadInfo,
            },
        }),
        [drafts, openThreadInfo]
    );

    return <MessengerContext.Provider value={store}>{children}</MessengerContext.Provider>;
}
