/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

/** lib components */
import { Typography, Stack } from '@mui/material';
import { FormattedMessage } from 'react-intl';

/** utils */
import { messengerMessage } from '@module-messenger/utils/messages';

/** styles */
import useStyles from './styles';
import classnames from 'classnames';

export default function ThreadTitle() {
    const classes = useStyles();

    return (
        <Stack className={classnames('.ThreadTitle', classes.thread_title)}>
            <Typography variant="h5">
                <FormattedMessage {...messengerMessage['module.messenger.component.thread.title']} />
            </Typography>
        </Stack>
    );
}
