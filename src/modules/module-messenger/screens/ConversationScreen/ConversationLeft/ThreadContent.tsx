/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import * as React from 'react';
import classnames from 'classnames';

/** lib components */
import { Box } from '@mui/material';

/** components */
import ThreadSearch from '@module-messenger/components/ThreadSearch';
import ThreadList from '@module-messenger/components/ThreadList';
import ThreadListSearch from '@module-messenger/components/ThreadListSearch';

/** styles */
import useStyles from './styles';

export default function ThreadContent() {
    const classes = useStyles();
    const [isFocusSearch, setFocusSearch] = React.useState(false);

    return (
        <>
            <ThreadSearch isFocusSearch={isFocusSearch} setFocusSearch={setFocusSearch} />
            <Box className={classnames(classes.thread_content, { [classes.thread_content_focus_search]: isFocusSearch })}>
                <ThreadList />
                <ThreadListSearch />
            </Box>
        </>
    );
}
