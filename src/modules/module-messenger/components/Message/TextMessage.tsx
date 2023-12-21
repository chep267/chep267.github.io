/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import classnames from 'classnames';

/** lib components */
import { Typography, Stack } from '@mui/material';

/** styles */
import useStyles from './styles';

type TextMessageProps = {
    isMe?: boolean;
    text?: string;
};

export default function TextMessage(props: TextMessageProps) {
    const { isMe, text } = props;
    const classes = useStyles();

    return (
        <Stack className={classnames(classes.message, { [classes.meMessage]: isMe }, { [classes.partnerMessage]: !isMe })}>
            <Typography variant="body1">{text}</Typography>
        </Stack>
    );
}
