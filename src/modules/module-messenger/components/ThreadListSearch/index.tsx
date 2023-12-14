/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import * as React from 'react';
import classnames from 'classnames';
import { useNavigate } from 'react-router-dom';

/** lib components */
import { ListItem, ListItemText, ListItemAvatar, Avatar } from '@mui/material';
import { Image as ImageIcon } from '@mui/icons-material';

/** components */
import ListBase from '@module-base/components/ListBase';

/** constants */
import { SCREEN } from '@module-global/constants/screen';

/** utils */
import { genPath } from '@module-base/utils/helpers/genPath';

/** hooks */
import { useListUser } from '@module-user/hooks/useListUser';

/** styles */
import useStyles from '@module-messenger/components/ThreadList/styles';

/** type */
import type { UserInfo } from '@firebase/auth';

const ThreadListSearch = React.memo(
    () => {
        const navigate = useNavigate();
        const classes = useStyles();
        const LIST_USER = useListUser();
        const { itemIds, items } = LIST_USER.data ?? {};

        const onClickItem = React.useCallback((user: UserInfo) => {
            navigate(genPath(SCREEN.MESSENGER, SCREEN.MESSENGER_CONVERSATION.replace(':tid', `${user.uid}`)));
        }, []);

        const renderItem = React.useCallback(
            (uid: string, index: number) => {
                const user = items?.[uid];
                return !user ? null : (
                    <ListItem
                        key={index}
                        className={classnames('.ThreadItem', classes.listItem)}
                        onClick={() => onClickItem(user)}>
                        <ListItemAvatar>
                            <Avatar>
                                <ImageIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={user.displayName} />
                    </ListItem>
                );
            },
            [items]
        );

        return (
            <ListBase
                className={classnames(classes.list, 'messenger_left_thread_list_search')}
                loading={LIST_USER.isLoading}
                data={itemIds}
                renderItem={renderItem}
            />
        );
    },
    () => true
);

ThreadListSearch.displayName = 'ThreadListSearch';
export default ThreadListSearch;
