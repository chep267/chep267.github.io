/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

/** lib components */
import { Typography, Stack } from '@mui/material';

/** hooks */

/** styles */
import useStyles from './styles';

/** types */
import type { TypeMessage } from '@module-messenger/models';

type MessageProps = {
    data: TypeMessage;
};

export default function Message(props: MessageProps) {
    const { data } = props;
    const classes = useStyles();

    return (
        <Stack className={classes.header}>
            <Typography variant="h5">{data.text}</Typography>
        </Stack>
    );
}
