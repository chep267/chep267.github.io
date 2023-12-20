/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import classnames from 'classnames';
import { useParams } from 'react-router-dom';

/** lib components */
import { IconButton } from '@mui/material';
import { Favorite as FavoriteIcon } from '@mui/icons-material';

/** hooks */
import { useSendMessage } from '@module-messenger/hooks/useSendMessage';
import { useMessenger } from '@module-messenger/hooks/useMessenger';

/** styles */
import useStyles from './styles';

export default function ButtonSendEmoji() {
    const { tid: TID } = useParams();
    const classes = useStyles();
    const tid = `${TID}`;

    // @ts-ignore
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const SEND_MESSAGE = useSendMessage();

    const { ui } = useMessenger();
    const draft = ui.drafts[tid];

    const onSend = () => {
        SEND_MESSAGE.mutate({ tid, draft: { text: '', type: 'emoji' } });
    };

    return (
        <IconButton onClick={onSend} className={classnames(classes.btnSend, { [classes.btnVisible]: !draft?.text })}>
            <FavoriteIcon color="primary" />
        </IconButton>
    );
}
