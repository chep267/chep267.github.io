/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import * as React from 'react';
import classnames from 'classnames';

/** lib components */
import { Stack, List } from '@mui/material';

/** components */
import ListLoading from './ListLoading';

/** styles */
import useStyles from './styles';

/** types */
import type { ListBaseProps } from '@module-base/models';

const ListBase = React.memo(function ListBase<T>(props: ListBaseProps<T>) {
    const { listRef, data, renderItem, className, loading, emptyText, ...listProps } = props;
    const classes = useStyles();

    const renderList = React.useMemo(() => {
        return data?.map((item, index) => renderItem?.(item, index));
    }, [data, renderItem]);

    return (
        <Stack className={classnames(classes.list_wrap, className)}>
            <ListLoading loading={loading} empty={!data?.length} emptyText={emptyText} />
            <List ref={listRef} className={classnames(classes.list)} {...listProps}>
                {renderList}
            </List>
        </Stack>
    );
});

export default ListBase;
