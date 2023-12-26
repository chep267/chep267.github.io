/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import { useParams } from 'react-router-dom';

/** lib components */
import { Stack } from '@mui/material';

/** components */
import ThreadName from '@module-messenger/components/ThreadName';

/** styles */
import useStyles from './styles';

export default function ConversationName() {
    const classes = useStyles();
    const { tid = '' } = useParams();

    return (
        <Stack className={classes.header_left}>
            <ThreadName tid={tid} variant="h5" />
        </Stack>
    );
}
