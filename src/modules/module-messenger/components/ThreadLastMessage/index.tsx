/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

/** lib components */
import { Skeleton } from '@mui/material';

/** utils */
import { Decrypt } from '@module-base/utils/security';

/** hooks */
import { useAuth } from '@module-auth/hooks/useAuth';

/** types */
import type { UserInfo } from '@firebase/auth';
import type { TypeDocumentThreadData } from '@module-messenger/models';

type ThreadLastMessageProps = { tid?: UserInfo['uid']; thread: TypeDocumentThreadData };

export default function ThreadLastMessage(props: ThreadLastMessageProps) {
    const { tid, thread } = props;
    const AUTH = useAuth();
    const uid = AUTH.data.me.uid;

    if (!tid || !thread?.lastMessage) {
        return <Skeleton width={100} />;
    }

    const sender = thread.lastMessage.uid === uid ? 'You' : 'Haha';
    const message = Decrypt(thread.lastMessage.text);

    return `${sender}: ${message}`;
}
