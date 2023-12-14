/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import * as React from 'react';
import classnames from 'classnames';
import { useParams } from 'react-router-dom';

/** lib components */
import { ListItem } from '@mui/material';

/** components */
import ListBase from '@module-base/components/ListBase';
import Message from '@module-messenger/components/Message';

/** hooks */
import { useMessenger } from '@module-messenger/hooks/useMessenger';

/** styles */
import useStyles from './styles';

export default function ConversationBody() {
    const classes = useStyles();
    const { tid } = useParams();
    const { data } = useMessenger();

    const messengerData = tid ? data.allMessages[tid] : null;

    const renderItem = React.useCallback(
        (_mid: string, index: number) => {
            const message = tid ? messengerData?.messages[tid] : null;
            return !message ? null : (
                <ListItem key={index} className={classnames(classes.listItem)}>
                    <Message />
                </ListItem>
            );
        },
        [messengerData, tid]
    );

    return (
        <ListBase
            className={classnames(classes.body, 'messenger_left_thread_list_default')}
            loading={false}
            data={messengerData?.messageIds}
            renderItem={renderItem}
        />
    );
}
