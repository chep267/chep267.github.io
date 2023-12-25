/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import * as React from 'react';
import { FormattedMessage } from 'react-intl';

/** lib components */
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';

/** utils */
import { baseMessage } from '@module-base/utils/messages';

/** styles */
import useStyles from './styles';

/** types */
import type { ListLoadingProps } from '@module-base/models';

const ListLoading = React.memo((props: ListLoadingProps) => {
    const { loading, empty, emptyText } = props;
    const classes = useStyles();

    return (
        <Stack className={classes.listLoading} display={loading || empty ? 'flex' : 'none'}>
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

ListLoading.displayName = 'TableLoading';
export default ListLoading;
