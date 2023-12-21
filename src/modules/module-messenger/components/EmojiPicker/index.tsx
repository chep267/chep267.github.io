/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import data from '@emoji-mart/data';

/** lib components */
import Picker from '@emoji-mart/react';

/** hooks */
import { useLanguage } from '@module-language/hooks/useLanguage';
import { useTheme } from '@module-theme/hooks/useTheme';

export default function EmojiPicker() {
    const {
        data: { locale },
    } = useLanguage();
    const {
        data: { mode },
    } = useTheme();

    return <Picker data={data} onEmojiSelect={console.log} locale={locale} theme={mode} />;
}
