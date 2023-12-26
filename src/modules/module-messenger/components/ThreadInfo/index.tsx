/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import { useParams } from 'react-router-dom';

/** lib components */
import { Stack } from '@mui/material';

/** styles */
import useStyles from './styles';
import ThreadName from '@module-messenger/components/ThreadName';
import ThreadAvatar from '@module-messenger/components/ThreadAvatar';

export default function ThreadInfo() {
    const classes = useStyles();
    const { tid = '' } = useParams();

    return (
        <Stack className={classes.thread_info}>
            <ThreadAvatar tid={tid} className={classes.avatar} />
            <ThreadName tid={tid} variant="h6" pt={2} />
        </Stack>
    );
}
