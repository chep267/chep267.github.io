/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

/** lib components */
import { FormattedMessage } from 'react-intl';
import { Skeleton, Stack, Typography } from '@mui/material';

/** components */
import EmojiMessage from '@module-messenger/components/Message/EmojiMessage';

/** utils */
import { Crypto } from '@module-base/utils';
import { messengerMessage } from '@module-messenger/utils';

/** hooks */
import { useAuth } from '@module-auth/hooks';

/** styles */
import useStyles from './styles';

/** types */
import type { ReactNode } from 'react';
import type { UserInfo } from '@module-user/models';
import type { TypeDocumentThreadData } from '@module-messenger/models';

type ThreadLastMessageProps = { tid?: UserInfo['uid']; message: TypeDocumentThreadData['lastMessage'] };

export default function ThreadLastMessage(props: ThreadLastMessageProps) {
    const { tid, message } = props;
    const classes = useStyles();
    const AUTH = useAuth();
    const uid = AUTH.data.me.uid;

    if (!tid || !message) {
        return <Skeleton width={100} />;
    }

    const sender =
        message.uid === uid ? (
            <Typography variant="body1">
                <FormattedMessage {...messengerMessage['module.messenger.component.thread.lastMessage.you']} />:
            </Typography>
        ) : undefined;

    let text: ReactNode;
    const numberFile = message.fileIds?.length;
    switch (true) {
        case message.type === 'emoji':
            text = <EmojiMessage fontSize="small" />;
            break;
        case numberFile > 0:
            text = (
                <Typography variant="body1">
                    <FormattedMessage {...messengerMessage['module.messenger.component.thread.lastMessage.sent']} />
                    &nbsp;
                    <FormattedMessage
                        {...messengerMessage[
                            `module.messenger.component.thread.lastMessage.${numberFile === 1 ? 'single' : 'multi'}.image`
                        ]}
                        values={{ number: message.fileIds?.length }}
                    />
                </Typography>
            );
            break;
        default:
            text = <Typography variant="body1">{Crypto.decrypt(message.text)}</Typography>;
            break;
    }

    return (
        <Stack className={classes.message}>
            {sender}
            {text}
        </Stack>
    );
}
