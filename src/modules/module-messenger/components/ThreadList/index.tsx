/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import * as React from 'react';
import classnames from 'classnames';
import { useNavigate, useParams } from 'react-router-dom';

/** components */
import ListBase from '@module-base/components/ListBase';
import ThreadItem from '@module-messenger/components/ThreadList/ThreadItem';

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

    const renderItem = (tid: string) => {
        const item = LIST_THREAD.data?.items?.[tid];
        return <ThreadItem item={item} isSelected={item.tid === currentTid} onClick={() => onClickItem(item.tid)} />;
    };

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
