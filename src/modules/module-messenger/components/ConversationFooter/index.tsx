/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import classnames from 'classnames';

/** lib components */
import { Stack, IconButton } from '@mui/material';
import { Mic as MicIcon, Photo as PhotoIcon } from '@mui/icons-material';

/** components */
import ButtonSendMessage from '@module-messenger/components/ConversationFooter/ButtonSendMessage';
import ButtonSendEmoji from '@module-messenger/components/ConversationFooter/ButtonSendEmoji';
import InputMessage from '@module-messenger/components/ConversationFooter/InputMessage';

/** styles */
import useStyles from './styles';

export default function ConversationFooter() {
    const classes = useStyles();

    return (
        <Stack className={classes.footer}>
            <Stack className={classnames(classes.footer_left, { [classes.footer_left_hidden]: false })}>
                <IconButton onClick={() => {}}>
                    <PhotoIcon color="primary" />
                </IconButton>
                <IconButton onClick={() => {}}>
                    <MicIcon color="primary" />
                </IconButton>
            </Stack>
            <Stack className={classnames(classes.footer_center, { [classes.footer_center_full]: false })}>
                <InputMessage />
            </Stack>
            <Stack className={classes.footer_right}>
                <ButtonSendMessage />
                <ButtonSendEmoji />
            </Stack>
        </Stack>
    );
}
