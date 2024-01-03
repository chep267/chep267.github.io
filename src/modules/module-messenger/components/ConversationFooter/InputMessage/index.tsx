/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import * as React from 'react';
import { useParams } from 'react-router-dom';

/** lib components */
import { InputAdornment, TextField } from '@mui/material';

/** components */
import ButtonChooseEmoji from '@module-messenger/components/ConversationFooter/ButtonChooseEmoji';

/** utils */
import { focusInput } from '@module-base/utils';

/** hooks */
import { useMessenger } from '@module-messenger/hooks';

/** styles */
import useStyles from './styles';

/** type */

export default function InputMessage() {
    const { tid = '' } = useParams();
    const classes = useStyles();
    const { ui, method } = useMessenger();

    const inputRef = React.useRef<HTMLInputElement>(null);
    const [text, setText] = React.useState('');
    const draft = tid ? ui.drafts[tid] : null;

    /** effect init text */
    React.useEffect(() => {
        if (draft?.text !== text) {
            setText(draft?.text || '');
        }
        focusInput(inputRef.current);
    }, [tid, draft]);

    /** effect change text */
    React.useEffect(() => {
        if (tid && text !== draft?.text) {
            method.setText({ tid, text });
        }
    }, [text]);

    const onChangeValue = React.useCallback((event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setText(event.target.value);
    }, []);

    const InputProps = React.useMemo(() => {
        return {
            endAdornment: (
                <InputAdornment position="end">
                    <ButtonChooseEmoji />
                </InputAdornment>
            ),
        };
    }, []);

    return (
        <TextField
            inputRef={inputRef}
            className={classes.input}
            placeholder="Aa"
            size="small"
            multiline
            maxRows={5}
            variant="outlined"
            spellCheck={false}
            fullWidth
            value={text}
            onChange={onChangeValue}
            InputProps={InputProps}
        />
    );
}
