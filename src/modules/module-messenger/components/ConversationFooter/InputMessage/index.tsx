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
import ButtonChooseEmoji from '../ButtonChooseEmoji';

/** utils */
import { focusInput } from '@module-base/utils/helpers/focusInput';

/** hooks */
import { useSendMessage } from '@module-messenger/hooks/useSendMessage';
import { useMessenger } from '@module-messenger/hooks/useMessenger';

/** styles */
import useStyles from './styles';

/** type */
import type { TypeMessage } from '@module-messenger/models';

export default function InputMessage() {
    const { tid } = useParams();
    const classes = useStyles();
    // @ts-ignore
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const SEND_MESSAGE = useSendMessage();
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
    }, [tid]);

    /** effect change text */
    React.useEffect(() => {
        if (tid && text !== draft?.text) {
            const message: TypeMessage = {
                text,
            };
            method.setDrafts((prev) => ({ ...prev, [tid]: message }));
        }
    }, [text]);

    const onChangeValue = React.useCallback((event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setText(event.target.value);
    }, []);

    const InputProps = React.useMemo(() => {
        return {
            endAdornment: (
                <InputAdornment position="end" className={classes.endAdornment}>
                    <ButtonChooseEmoji />
                </InputAdornment>
            ),
        };
    }, []);

    return (
        <TextField
            inputRef={inputRef}
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
