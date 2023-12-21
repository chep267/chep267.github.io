/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import * as React from 'react';
import classnames from 'classnames';
import { useParams } from 'react-router-dom';

/** lib components */
import { IconButton } from '@mui/material';
import { Favorite as FavoriteIcon, Send as SendIcon } from '@mui/icons-material';

/** hooks */
import { useSendMessage } from '@module-messenger/hooks/useSendMessage';
import { useMessenger } from '@module-messenger/hooks/useMessenger';

/** styles */
import useStyles from './styles';

export default function ButtonSendMessage() {
    const { tid: TID } = useParams();
    const classes = useStyles();
    const tid = `${TID}`;

    const SEND_MESSAGE = useSendMessage();

    const { ui, method } = useMessenger();
    const draft = ui.drafts[tid];

    const onSendMessage = () => {
        SEND_MESSAGE.mutate(
            { tid, draft },
            {
                onSuccess: () => {
                    method.setDrafts({});
                },
                onError: () => {
                    method.setDrafts({});
                },
            }
        );
    };

    const onSendEmoji = React.useCallback(() => {
        SEND_MESSAGE.mutate({ tid, draft: { text: '', type: 'emoji' } });
    }, []);

    return (
        <>
            <IconButton
                disabled={SEND_MESSAGE.isPending}
                onClick={onSendMessage}
                className={classnames(classes.btnSend, { [classes.btnVisible]: !!draft?.text })}>
                <SendIcon color="primary" />
            </IconButton>
            <IconButton
                disabled={SEND_MESSAGE.isPending}
                onClick={onSendEmoji}
                className={classnames(classes.btnSend, { [classes.btnVisible]: !draft?.text })}>
                <FavoriteIcon color="primary" />
            </IconButton>
        </>
    );
}
