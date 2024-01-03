/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import * as React from 'react';
import classnames from 'classnames';

/** lib components */
import { Box, Table, TableContainer } from '@mui/material';

/** components */
import TableLoading from './TableLoading';
import TableHeader from './TableHeader';
import TableBody from './TableBody';

/** styles */
import useStyles from './styles';

/** types */
import type { TableBaseProps } from '@module-base/models';

const TableBase = React.memo(function TableBase(props: TableBaseProps) {
    const {
        className,
        loading,
        emptyText,

        data,
        rows,
        orderBy,
        orderType,

        tableRowProps,

        onScroll,
        onClickItem,
        onRequestSort,
    } = props;

    const classes = useStyles();

    return (
        <Box className={classnames(classes.tableBox, className)}>
            <TableLoading loading={loading} empty={!data?.length} emptyText={emptyText} />
            <TableContainer onScroll={onScroll} className={classes.tableContainer}>
                <Table stickyHeader size="medium" className={classes.table}>
                    <TableHeader rows={rows} orderBy={orderBy} orderType={orderType} onRequestSort={onRequestSort} />
                    <TableBody data={data} rows={rows} onClickItem={onClickItem} tableRowProps={tableRowProps} />
                </Table>
            </TableContainer>
        </Box>
    );
});

export default TableBase;
