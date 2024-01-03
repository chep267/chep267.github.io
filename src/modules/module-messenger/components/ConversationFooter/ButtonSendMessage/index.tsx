/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import * as React from 'react';
import classnames from 'classnames';
import { useParams } from 'react-router-dom';

/** lib components */
import { FormattedMessage } from 'react-intl';
import { IconButton, Tooltip } from '@mui/material';
import { Favorite as FavoriteIcon, Send as SendIcon } from '@mui/icons-material';

/** utils */
import { genMessage, messengerMessage } from '@module-messenger/utils';

/** hooks */
import { useSendMessage, useMessenger } from '@module-messenger/hooks';

/** styles */
import useStyles from './styles';

export default function ButtonSendMessage() {
    const { tid = '' } = useParams();
    const classes = useStyles();
    const SEND_MESSAGE = useSendMessage();
    const { ui, method } = useMessenger();
    const draft = ui.drafts[tid];

    const onSendMessage = () => {
        SEND_MESSAGE.mutate(
            { tid, draft },
            {
                onSuccess: () => {
                    method.setEmptyThread(tid);
                },
                onError: () => {
                    method.setEmptyThread(tid);
                },
            }
        );
    };

    const onSendEmoji = React.useCallback(() => {
        SEND_MESSAGE.mutate({ tid, draft: genMessage({ tid, type: 'emoji' }) });
    }, [tid]);

    const hasContent = !!draft?.text || !!draft?.fileIds?.length;
    return (
        <>
            <Tooltip
                title={<FormattedMessage {...messengerMessage['module.messenger.component.button.sendMessage.tooltip']} />}>
                <IconButton
                    disabled={SEND_MESSAGE.isPending}
                    onClick={onSendMessage}
                    className={classnames(classes.btnSend, { [classes.btnVisible]: hasContent })}>
                    <SendIcon color="primary" />
                </IconButton>
            </Tooltip>
            <Tooltip
                title={<FormattedMessage {...messengerMessage['module.messenger.component.button.sendEmoji.tooltip']} />}>
                <IconButton
                    disabled={SEND_MESSAGE.isPending}
                    onClick={onSendEmoji}
                    className={classnames(classes.btnSend, { [classes.btnVisible]: !hasContent })}>
                    <FavoriteIcon color="primary" />
                </IconButton>
            </Tooltip>
        </>
    );
}
