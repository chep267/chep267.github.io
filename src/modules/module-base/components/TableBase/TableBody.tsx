/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import * as React from 'react';
import classnames from 'classnames';

/** lib components */
import { TableBody as TableBodyElem, TableRow, TableCell } from '@mui/material';

/** constants */
import { emptyObject } from '@module-base/constants/defaulValue';

/** styles */
import useStyles from './styles';

/** types */
import type { TableBodyProps } from '@module-base/models';

const TableBody = React.memo(function TableBody(props: TableBodyProps) {
    const { onClickItem, data, rows, tableRowProps } = props;
    const { hover, className, onClick, ...other } = tableRowProps ?? emptyObject;
    const classes = useStyles();

    const isHover = hover || !!onClickItem;

    return (
        <TableBodyElem>
            {data?.map((item, indexRow) => {
                // @ts-ignore
                const rowKey = `${item?.key || item?.id || `${indexRow}-${Date.now()}`}`;

                return (
                    <TableRow
                        className={classnames(classes.tableRow, { [classes.tableRowHover]: isHover }, className)}
                        key={rowKey}
                        onClick={(event) => {
                            onClick?.(event);
                            onClickItem?.(item);
                        }}
                        hover={isHover}
                        {...other}>
                        {rows?.map((cell, indexCell) => (
                            <TableCell key={`${rowKey}-${cell.id}`}>{cell.render(item, indexRow, indexCell)}</TableCell>
                        ))}
                    </TableRow>
                );
            })}
        </TableBodyElem>
    );
});

export default TableBody;
