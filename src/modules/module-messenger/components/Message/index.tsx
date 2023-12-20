/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import dayjs from 'dayjs';
import classnames from 'classnames';

/** lib components */
import { Typography, Stack, Tooltip } from '@mui/material';
import { Favorite as FavoriteIcon } from '@mui/icons-material';

/** utils */
import { Decrypt } from '@module-base/utils/security';

/** hooks */
import { useAuth } from '@module-auth/hooks/useAuth';
import { useLanguage } from '@module-language/hooks/useLanguage';

/** styles */
import useStyles from './styles';

/** types */
import type { TypeDocumentMessageData } from '@module-messenger/models';

type MessageProps = {
    data: TypeDocumentMessageData;
};

export default function Message(props: MessageProps) {
    const { data } = props;
    const classes = useStyles();
    const { me } = useAuth();
    const { locale } = useLanguage();
    const isMe = data.uid === me?.uid;

    return (
        <Stack className={classnames(classes.message_view, { [classes.meView]: isMe }, { [classes.partnerView]: !isMe })}>
            <Tooltip
                title={dayjs(data.createdTime).locale(locale).format('hh:mm dddd, DD/MM/YYYY')}
                placement={isMe ? 'right' : 'left'}>
                {data.type === 'emoji' ? (
                    <FavoriteIcon color="primary" fontSize="large" />
                ) : (
                    <Stack
                        className={classnames(
                            classes.message,
                            { [classes.meMessage]: isMe },
                            { [classes.partnerMessage]: !isMe }
                        )}>
                        <Typography variant="h5">{Decrypt(data.text)}</Typography>
                    </Stack>
                )}
            </Tooltip>
        </Stack>
    );
}
