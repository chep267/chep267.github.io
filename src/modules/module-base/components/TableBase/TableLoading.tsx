/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import * as React from 'react';
import { FormattedMessage } from 'react-intl';

/** lib components */
import { Stack, Typography, CircularProgress } from '@mui/material';

/** utils */
import { baseMessage } from '@module-base/utils';

/** styles */
import useStyles from './styles';

/** types */
import type { TableLoadingProps } from '@module-base/models';

const TableLoading = React.memo(function TableLoading(props: TableLoadingProps) {
    const { loading, empty, emptyText } = props;
    const classes = useStyles();

    return (
        <Stack className={classes.tableLoading} display={loading || empty ? 'flex' : 'none'}>
            {loading ? (
                <CircularProgress color="primary" />
            ) : (
                <Typography>
                    {emptyText || <FormattedMessage {...baseMessage['module.base.component.table.empty.text']} />}
                </Typography>
            )}
        </Stack>
    );
});

export default TableLoading;
