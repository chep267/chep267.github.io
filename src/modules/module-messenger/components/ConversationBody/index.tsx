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
import { useBase } from '@module-base/hooks/useBase';
import { useUser } from '@module-user/hooks/useUser';

/** styles */
import useStyles from './styles';

export default function ConversationBody() {
    const classes = useStyles();
    const { tid } = useParams();
    const user = useUser({ uid: tid });

    const { messenger } = useBase();

    const arr = Array.from({ length: 20 });

    const renderItem = React.useCallback((mid: string, index: number) => {
        return (
            <ListItem key={index} className={classnames(classes.listItem)}>
                <Message />
            </ListItem>
        );
    }, []);

    return (
        <ListBase
            className={classnames(classes.body, 'messenger_left_thread_list_default')}
            loading={false}
            data={arr}
            renderItem={renderItem}
        />
    );
}
