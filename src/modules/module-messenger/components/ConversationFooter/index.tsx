/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import classnames from 'classnames';

/** lib components */
import { Stack, IconButton } from '@mui/material';
import { Mic as MicIcon } from '@mui/icons-material';

/** components */
import ButtonSendMessage from '@module-messenger/components/ConversationFooter/ButtonSendMessage';
import InputMessage from '@module-messenger/components/ConversationFooter/InputMessage';
import ButtonChooseFile from '@module-messenger/components/ConversationFooter/ButtonChooseFile';
import ListFiles from '@module-messenger/components/ConversationFooter/ListFiles';

/** styles */
import useStyles from './styles';

export default function ConversationFooter() {
    const classes = useStyles();

    return (
        <Stack className={classes.footer}>
            <Stack className={classnames(classes.footer_left, { [classes.footer_left_hidden]: false })}>
                <ButtonChooseFile />
                <IconButton onClick={() => {}}>
                    <MicIcon color="primary" />
                </IconButton>
            </Stack>
            <Stack className={classnames(classes.footer_center, { [classes.footer_center_full]: false })}>
                <ListFiles />
                <InputMessage />
            </Stack>
            <Stack className={classes.footer_right}>
                <ButtonSendMessage />
            </Stack>
        </Stack>
    );
}
