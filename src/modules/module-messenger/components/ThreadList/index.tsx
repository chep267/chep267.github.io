/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import * as React from 'react';
import classnames from 'classnames';
import { useNavigate, useParams } from 'react-router-dom';

/** lib components */
import { ListItem, ListItemText, ListItemAvatar, Avatar, IconButton } from '@mui/material';
import { Image as ImageIcon, MoreHoriz as MoreHorizIcon } from '@mui/icons-material';

/** components */
import ListBase from '@module-base/components/ListBase';

/** constants */
import { SCREEN } from '@module-global/constants/screen';

/** utils */
import { genPath } from '@module-base/utils/helpers/genPath';

/** hooks */
import { useListThread } from '@module-messenger/hooks/useListThread';

/** styles */
import useStyles from './styles';

const ThreadList = React.memo(
    () => {
        const navigate = useNavigate();
        const { tid: currentTid } = useParams();
        const classes = useStyles();
        const LIST_THREAD = useListThread();

        const { itemIds, items } = LIST_THREAD.data;
        const firstId = itemIds[0];

        React.useEffect(() => {
            if (firstId && (!currentTid || currentTid === '0')) {
                navigate(genPath(SCREEN.MESSENGER, SCREEN.MESSENGER_CONVERSATION.replace(':tid', firstId)));
            }
        }, [currentTid, firstId]);

        const renderItem = React.useCallback(
            (tid: string, index: number) => {
                const threadData = items[tid];
                return !threadData ? null : (
                    <ListItem
                        key={index}
                        className={classnames(classes.listItem, { [classes.listItemSelected]: tid === currentTid })}
                        onClick={() =>
                            navigate(genPath(SCREEN.MESSENGER, SCREEN.MESSENGER_CONVERSATION.replace(':tid', tid)))
                        }>
                        <ListItemAvatar>
                            <Avatar>
                                <ImageIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={threadData.name} secondary={new Date(Number(tid)).toString()} />
                        <IconButton className={classes.itemOption} onClick={(e) => e.stopPropagation()}>
                            <MoreHorizIcon />
                        </IconButton>
                    </ListItem>
                );
            },
            [currentTid, items]
        );

        return (
            <ListBase
                className={classnames(classes.list, 'messenger_left_thread_list_default')}
                loading={LIST_THREAD.isLoading}
                data={itemIds}
                renderItem={renderItem}
            />
        );
    },
    () => true
);

ThreadList.displayName = 'ThreadList';
export default ThreadList;
