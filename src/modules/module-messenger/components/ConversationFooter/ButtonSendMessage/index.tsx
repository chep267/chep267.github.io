/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import classnames from 'classnames';
import { useParams } from 'react-router-dom';

/** lib components */
import { IconButton } from '@mui/material';
import { Send as SendIcon } from '@mui/icons-material';

/** hooks */
import { useSendMessage } from '@module-messenger/hooks/useSendMessage';
import { useMessenger } from '@module-messenger/hooks/useMessenger';

/** styles */
import useStyles from './styles';

export default function ButtonSendMessage() {
    const { tid: TID } = useParams();
    const classes = useStyles();
    const tid = `${TID}`;

    const SEND_MESSAGE = useSendMessage();

    const { ui, method } = useMessenger();
    const draft = ui.drafts[tid];

    const onSend = () => {
        SEND_MESSAGE.mutate(
            { tid, draft },
            {
                onSuccess: () => {
                    method.setDrafts({});
                },
                onError: () => {
                    method.setDrafts({});
                },
            }
        );
    };

    return (
        <IconButton onClick={onSend} className={classnames(classes.btnSend, { [classes.btnVisible]: !!draft?.text })}>
            <SendIcon color="primary" />
        </IconButton>
    );
}
