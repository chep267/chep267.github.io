/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import * as React from 'react';
import { useParams } from 'react-router-dom';
import data from '@emoji-mart/data';

/** lib components */
import Picker from '@emoji-mart/react';

/** hooks */
import { useLanguage } from '@module-language/hooks/useLanguage';
import { useTheme } from '@module-theme/hooks/useTheme';
import { useMessenger } from '@module-messenger/hooks/useMessenger';

export default function EmojiPicker() {
    const { tid } = useParams();
    const {
        data: { locale },
    } = useLanguage();
    const {
        data: { mode },
    } = useTheme();

    const { method } = useMessenger();

    const onEmojiSelect = React.useCallback(
        (emoji: any) => {
            if (tid && emoji.native) {
                method.setDrafts((prev) => {
                    const draft = {
                        ...prev[tid],
                        text: prev[tid].text + emoji.native,
                    };
                    return { ...prev, [tid]: draft };
                });
            }
        },
        [tid]
    );

    return <Picker data={data} onEmojiSelect={onEmojiSelect} locale={locale} theme={mode} />;
}
