/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import * as React from 'react';
import classnames from 'classnames';
import { useNavigate, useParams } from 'react-router-dom';

/** lib components */
import { ListItem, ListItemText, ListItemAvatar, IconButton } from '@mui/material';
import { MoreHoriz as MoreHorizIcon } from '@mui/icons-material';

/** components */
import ListBase from '@module-base/components/ListBase';
import ThreadName from '@module-messenger/components/ThreadName';
import ThreadAvatar from '@module-messenger/components/ThreadAvatar';
import ThreadLastMessage from '@module-messenger/components/ThreadLastMessage';

/** constants */
import { SCREEN } from '@module-global/constants/screen';

/** utils */
import { genPath } from '@module-base/utils/helpers/genPath';

/** hooks */
import { useListenListThread } from '@module-messenger/hooks/useListenListThread';

/** styles */
import useStyles from './styles';

const ThreadList = React.memo(() => {
    const navigate = useNavigate();
    const { tid: currentTid } = useParams();
    const classes = useStyles();
    const LIST_THREAD = useListenListThread();

    const firstId = LIST_THREAD.data.itemIds[0];

    React.useEffect(() => {
        if (firstId && (!currentTid || currentTid === '0')) {
            navigate(genPath(SCREEN.MESSENGER, SCREEN.MESSENGER_CONVERSATION.replace(':tid', firstId)));
        }
    }, [currentTid, firstId]);

    const onClickItem = React.useCallback((tid: string) => {
        navigate(genPath(SCREEN.MESSENGER, SCREEN.MESSENGER_CONVERSATION.replace(':tid', tid)));
    }, []);

    const stopPropagation = React.useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();
    }, []);

    const renderItem = React.useCallback(
        (tid: string) => {
            const thread = LIST_THREAD.data?.items?.[tid];
            return (
                <ListItem
                    key={tid}
                    className={classnames('.ThreadItem', classes.listItem, {
                        [classes.listItemSelected]: tid === currentTid,
                    })}
                    onClick={() => onClickItem(tid)}>
                    <ListItemAvatar>
                        <ThreadAvatar tid={tid} />
                    </ListItemAvatar>
                    <ListItemText
                        primary={<ThreadName tid={tid} variant="h6" />}
                        secondary={<ThreadLastMessage tid={tid} message={thread?.lastMessage} />}
                    />
                    <IconButton className={classes.itemOption} onClick={stopPropagation}>
                        <MoreHorizIcon color="primary" />
                    </IconButton>
                </ListItem>
            );
        },
        [currentTid, LIST_THREAD.data.items]
    );

    return (
        <ListBase
            className={classnames(classes.list, 'messenger_left_thread_list_default')}
            loading={LIST_THREAD.isFetching}
            data={LIST_THREAD.data.itemIds}
            renderItem={renderItem}
        />
    );
});

ThreadList.displayName = 'ThreadList';
export default ThreadList;
