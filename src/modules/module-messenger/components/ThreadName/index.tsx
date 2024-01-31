/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

/** lib components */
import { Skeleton, Typography } from '@mui/material';

/** components */
import { UserName } from '@module-user/components';

/** constants */
import { ChatBotGPT } from '@module-messenger/constants';

/** utils */
import { checkId } from '@module-base/utils';

/** types */
import type { TypographyProps } from '@mui/material';
import type { UserInfo } from '@module-user/models';

type ThreadNameProps = TypographyProps & { tid?: UserInfo['uid']; name?: UserInfo['displayName'] };

export default function ThreadName(props: ThreadNameProps) {
    const { tid, name, ...otherProps } = props;

    if (tid === ChatBotGPT.MESSENGER_CHAT_BOT_AI_ID) {
        return <Typography {...otherProps}>{ChatBotGPT.MESSENGER_CHAT_BOT_AI_NAME}</Typography>;
    }

    if (!name && !tid) {
        return (
            <Typography {...otherProps}>
                <Skeleton width={100} />
            </Typography>
        );
    }

    const uid = checkId(`${tid}`, 'uid');
    return <UserName uid={uid} name={name} {...otherProps} />;
}
