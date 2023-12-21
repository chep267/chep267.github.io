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

/** utils */
import { Decrypt } from '@module-base/utils/security';

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
        <Stack className={classnames(classes.message_view, { [classes.meView]: isMe }, { [classes.partnerView]: !isMe })}>
            <Tooltip
                title={dayjs(data.createdTime).locale(locale).format('hh:mm dddd, DD/MM/YYYY')}
                placement={isMe ? 'right' : 'left'}>
                <React.Suspense>
                    {data.type === 'emoji' ? <EmojiMessage /> : null}
                    {data.type === 'text' ? <TextMessage isMe={isMe} text={Decrypt(data.text)} /> : null}
                </React.Suspense>
            </Tooltip>
        </Stack>
    );
}
