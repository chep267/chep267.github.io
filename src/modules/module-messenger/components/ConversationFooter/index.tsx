/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import * as React from 'react';
import classnames from 'classnames';

/** lib components */
import { TextField, Stack, IconButton, InputAdornment } from '@mui/material';
import {
    Mic as MicIcon,
    EmojiEmotions as EmojiEmotionsIcon,
    Send as SendIcon,
    Favorite as FavoriteIcon,
    Photo as PhotoIcon,
} from '@mui/icons-material';

/** hooks */
import { useBase } from '@module-base/hooks/useBase';

/** styles */
import useStyles from './styles';

export default function ConversationFooter() {
    const classes = useStyles();
    const { messenger } = useBase();

    const [text, setText] = React.useState('');

    return (
        <Stack className={classes.footer}>
            <Stack className={classnames(classes.footer_left, { [classes.footer_left_hidden]: text })}>
                <IconButton onClick={() => {}}>
                    <PhotoIcon color="primary" />
                </IconButton>
                <IconButton onClick={() => {}}>
                    <MicIcon color="primary" />
                </IconButton>
            </Stack>
            <Stack className={classnames(classes.footer_center, { [classes.footer_center_full]: text })}>
                <TextField
                    placeholder="Aa"
                    size="small"
                    multiline
                    maxRows={5}
                    variant="outlined"
                    spellCheck={false}
                    fullWidth
                    autoFocus // eslint-disable-line jsx-a11y/no-autofocus
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end" className={classes.endAdornment}>
                                <IconButton>
                                    <EmojiEmotionsIcon color="primary" />
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
            </Stack>
            <Stack className={classes.footer_right}>
                <IconButton>{text ? <SendIcon color="primary" /> : <FavoriteIcon color="primary" />}</IconButton>
            </Stack>
        </Stack>
    );
}
