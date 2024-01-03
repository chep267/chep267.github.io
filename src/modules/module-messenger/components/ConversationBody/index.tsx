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
import { ListBase } from '@module-base/components';
import Message from '@module-messenger/components/Message';

/** hooks */
import { useListenListMessage } from '@module-messenger/hooks';

/** styles */
import useStyles from './styles';

export default function ConversationBody() {
    const classes = useStyles();
    const { tid = '' } = useParams();
    const LIST_MESSAGE = useListenListMessage({ tid });
    const listRef = React.useRef<HTMLUListElement>(null);

    React.useEffect(() => {
        if (listRef.current) {
            setTimeout(() => {
                if (listRef.current) {
                    listRef.current.scrollTop = listRef.current.scrollHeight;
                }
            }, 200);
        }
    }, [LIST_MESSAGE.isFetching, LIST_MESSAGE.data.itemIds]);

    const renderItem = React.useCallback(
        (mid: string) => {
            const message = LIST_MESSAGE.data.items[mid];
            return (
                <ListItem key={`${tid}-${mid}`} className={classnames(classes.listItem)}>
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
