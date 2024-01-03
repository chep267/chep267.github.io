/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import * as React from 'react';
import { visuallyHidden } from '@mui/utils';

/** lib components */
import { Box, TableHead, TableRow, TableCell, TableSortLabel } from '@mui/material';
import { ArrowDropDown as ArrowDropDownIcon } from '@mui/icons-material';

/** styles */
import useStyles from './styles';

/** types */
import type { TableHeaderProps } from '@module-base/models';

const TableHeader = React.memo(function TableHeader(props: TableHeaderProps) {
    const { rows, orderType, orderBy, onRequestSort } = props;
    const classes = useStyles();

    return (
        <TableHead className={classes.tableHead}>
            <TableRow>
                {rows?.map((cell) => (
                    <TableCell
                        key={cell.id}
                        align="left"
                        padding="normal"
                        sortDirection={orderBy === cell.id ? orderType : false}>
                        {!cell.isSort || !orderBy || !orderType ? (
                            cell.label
                        ) : (
                            <TableSortLabel
                                active={orderBy === cell.id}
                                direction={orderBy === cell.id ? orderType : 'asc'}
                                IconComponent={ArrowDropDownIcon}
                                onClick={() => onRequestSort?.(cell.id)}>
                                {cell.label}
                                {orderBy === cell.id ? (
                                    <Box component="span" sx={visuallyHidden}>
                                        {orderType === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                    </Box>
                                ) : null}
                            </TableSortLabel>
                        )}
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
});

export default TableHeader;
