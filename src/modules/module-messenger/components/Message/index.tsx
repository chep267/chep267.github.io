/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import * as React from 'react';
import dayjs from 'dayjs';
import classnames from 'classnames';

/** lib components */
import { Stack, Tooltip } from '@mui/material';

/** components */
import OptionMessage from '@module-messenger/components/Message/OptionMessage';

/** hooks */
import { useAuth } from '@module-auth/hooks/useAuth';
import { useLanguage } from '@module-language/hooks/useLanguage';

/** styles */
import useStyles from './styles';

/** types */
import type { TypeDocumentMessageData } from '@module-messenger/models';

/** lazy components */
const EmojiMessage = React.lazy(() => import('./EmojiMessage'));
const TextMessage = React.lazy(() => import('./TextMessage'));
const ImageMessage = React.lazy(() => import('./ImageMessage'));

type MessageProps = {
    data: TypeDocumentMessageData;
};

export default function Message(props: MessageProps) {
    const { data } = props;
    const classes = useStyles();
    const {
        data: { me },
    } = useAuth();
    const {
        data: { locale },
    } = useLanguage();
    const isMe = data.uid === me?.uid;

    return (
        <Tooltip
            title={dayjs(data.createdTime).locale(locale).format('hh:mm dddd, DD/MM/YYYY')}
            placement={isMe ? 'right' : 'left'}>
            <Stack className={classnames(classes.message_view, { [classes.meView]: isMe }, { [classes.partnerView]: !isMe })}>
                {isMe ? <OptionMessage /> : null}
                <Stack
                    className={classnames(
                        classes.message,
                        { [classes.meMessage]: isMe },
                        { [classes.partnerMessage]: !isMe }
                    )}>
                    <React.Suspense>
                        {data.type === 'emoji' ? <EmojiMessage /> : null}
                        {data.type === 'text' && data.text ? <TextMessage isMe={isMe} text={data.text} /> : null}
                        {data.fileIds.length > 0 ? <ImageMessage fileIds={data.fileIds} files={data.files} /> : null}
                    </React.Suspense>
                </Stack>
                {!isMe ? <OptionMessage /> : null}
            </Stack>
        </Tooltip>
    );
}
