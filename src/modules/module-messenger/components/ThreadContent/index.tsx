/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import classnames from 'classnames';

/** lib components */
import { Box } from '@mui/material';

/** components */
import ThreadList from '@module-messenger/components/ThreadList';
import ThreadListSearch from '@module-messenger/components/ThreadListSearch';

/** hooks */
import { useUiThreadSearch } from '@module-messenger/hooks';

/** styles */
import useStyles from './styles';

export default function ThreadContent() {
    const classes = useStyles();
    const {
        data: { isFocusSearch },
    } = useUiThreadSearch();

    return (
        <Box className={classnames(classes.thread_content, { [classes.thread_content_focus_search]: isFocusSearch })}>
            <ThreadList />
            <ThreadListSearch />
        </Box>
    );
}
