/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import * as React from 'react';
import classnames from 'classnames';

/** lib components */
import List from '@mui/material/List';

/** components */
import ListLoading from './ListLoading';

/** styles */
import useStyles from './styles';

/** types */
import type { ListBaseProps } from '@module-base/models';

const ListBase = React.memo(function <T>(props: ListBaseProps<T> & { listRef?: ListBaseProps<T>['ref'] }) {
    const { listRef, data, renderItem, className, loading, emptyText, ...listProps } = props;
    const classes = useStyles();

    const renderList = React.useMemo(() => {
        return data?.map((item, index) => renderItem?.(item, index));
    }, [data, renderItem]);

    return (
        <List ref={listRef} className={classnames(classes.list, className)} {...listProps}>
            <ListLoading loading={loading} empty={!data?.length} emptyText={emptyText} />
            {renderList}
        </List>
    );
});

ListBase.displayName = 'ListBase';
export default ListBase;
