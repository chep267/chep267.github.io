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
import ListBase from '@module-base/components/ListBase';
import ThreadAvatar from '@module-messenger/components/ThreadAvatar';
import ThreadName from '@module-messenger/components/ThreadName';

/** constants */
import { SCREEN } from '@module-global/constants/screen';

/** utils */
import { checkString } from '@module-base/utils/helpers/checkString';
import { genPath } from '@module-base/utils/helpers/genPath';
import { checkId } from '@module-base/utils/helpers/checkId';

/** hooks */
import { useListUser } from '@module-user/hooks/useListUser';

/** styles */
import useStyles from '@module-messenger/components/ThreadList/styles';

/** type */
import type { UserInfo } from '@firebase/auth';

type ThreadListSearchProps = {
    isSearching: boolean;
    searchKey: string;
};

const ThreadListSearch = React.memo((props: ThreadListSearchProps) => {
    const { searchKey, isSearching } = props;
    const navigate = useNavigate();
    const classes = useStyles();
    const LIST_USER = useListUser();
    const { itemIds, items } = LIST_USER.data ?? {};

    const onClickItem = React.useCallback((uid: UserInfo['uid']) => {
        const tid = checkId(uid, 'tid');
        navigate(genPath(SCREEN.MESSENGER, SCREEN.MESSENGER_CONVERSATION.replace(':tid', tid)));
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

ThreadListSearch.displayName = 'ThreadListSearch';
export default ThreadListSearch;
