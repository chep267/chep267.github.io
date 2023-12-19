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
import { useListenListMessage } from '@module-messenger/hooks/useListenListMessage';

/** styles */
import useStyles from './styles';

export default function ConversationBody() {
    const classes = useStyles();
    const { tid } = useParams();
    const LIST_MESSAGE = useListenListMessage({ tid });
    const listRef = React.useRef<HTMLUListElement>(null);

    React.useEffect(() => {
        if (listRef.current) {
            listRef.current.scrollTop = listRef.current.scrollHeight;
        }
    }, [LIST_MESSAGE.data.itemIds, listRef.current]);

    const renderItem = React.useCallback(
        (mid: string, index: number) => {
            const message = LIST_MESSAGE.data.items[mid];
            return !message ? null : (
                <ListItem key={index} className={classnames(classes.listItem)}>
                    <Message data={message} />
                </ListItem>
            );
        },
        [LIST_MESSAGE.data.itemIds, tid]
    );

    return (
        <ListBase
            listRef={listRef}
            className={classnames(classes.body, 'messenger_left_thread_list_default')}
            loading={LIST_MESSAGE.isFetching}
            data={LIST_MESSAGE.data.itemIds}
            renderItem={renderItem}
        />
    );
}
