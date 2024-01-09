/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import * as React from 'react';
import classnames from 'classnames';
import { useNavigate } from 'react-router-dom';

/** lib components */
import { ListItem, ListItemText, ListItemAvatar } from '@mui/material';

/** components */
import { ListBase } from '@module-base/components';
import ThreadAvatar from '@module-messenger/components/ThreadAvatar';
import ThreadName from '@module-messenger/components/ThreadName';

/** constants */
import { ScreenPath } from '@module-global/constants';

/** utils */
import { checkString, genPath, checkId } from '@module-base/utils';

/** hooks */
import { useListUser } from '@module-user/hooks';
import { useUiThreadSearch } from '@module-messenger/hooks';

/** styles */
import useStyles from '@module-messenger/components/ThreadList/styles';

/** type */
import type { UserInfo } from '@module-user/models';

const ThreadListSearch = React.memo(function ThreadListSearch() {
    const navigate = useNavigate();
    const classes = useStyles();
    const LIST_USER = useListUser();
    const {
        data: { searchKey, isSearching },
    } = useUiThreadSearch();

    const { itemIds, items } = LIST_USER.data ?? {};

    const onClickItem = React.useCallback((uid: UserInfo['uid']) => {
        const tid = checkId(uid, 'tid');
        navigate(genPath(ScreenPath.MESSENGER, ScreenPath.MESSENGER_CONVERSATION.replace(':tid', tid)));
    }, []);

    const renderItem = React.useCallback(
        (uid: UserInfo['uid']) => {
            const user = items?.[uid];
            const isHidden = !user || !checkString(user.displayName || '', searchKey);

            return isHidden ? null : (
                <ListItem key={uid} className={classnames('.ThreadItem', classes.listItem)} onClick={() => onClickItem(uid)}>
                    <ListItemAvatar>
                        <ThreadAvatar tid={uid} src={user.photoURL || undefined} alt={user.displayName || undefined} />
                    </ListItemAvatar>
                    <ListItemText primary={<ThreadName tid={uid} name={user.displayName} />} />
                </ListItem>
            );
        },
        [items, searchKey]
    );

    return (
        <ListBase
            className={classnames(classes.list, 'messenger_left_thread_list_search')}
            loading={LIST_USER.isLoading || isSearching}
            data={itemIds}
            renderItem={renderItem}
        />
    );
});

export default ThreadListSearch;
