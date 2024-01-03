/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

/** constants */
import { localeObject } from '@module-language/constants';

/** utils */
import { VI as VI_BASE, EN as EN_BASE } from '@module-base/utils';
import { VI as VI_AUTH, EN as EN_AUTH } from '@module-auth/utils/messages';
import { VI as VI_LANG, EN as EN_LANG } from '@module-language/utils';
import { VI as VI_THEME, EN as EN_THEME } from '@module-theme/utils';
import { VI as VI_FEED, EN as EN_FEED } from '@module-feed/utils/messages';
import { VI as VI_MESS, EN as EN_MESS } from '@module-messenger/utils/messages';
import { VI as VI_CALENDAR, EN as EN_CALENDAR } from '@module-calendar/utils/messages';
import { VI as VI_GAME, EN as EN_GAME } from '@module-game/utils/messages';
import { VI as VI_GLOBAL, EN as EN_GLOBAL } from '@module-global/utils/messages';

/** types */
import type { TypeMessages } from '@module-language/models';

export const messages: TypeMessages = Object.freeze({
    [localeObject.vi]: Object.assign(
        {},
        VI_BASE,
        VI_AUTH,
        VI_LANG,
        VI_THEME,
        VI_FEED,
        VI_MESS,
        VI_CALENDAR,
        VI_GAME,
        VI_GLOBAL
    ),
    [localeObject.en]: Object.assign(
        {},
        EN_BASE,
        EN_AUTH,
        EN_LANG,
        EN_THEME,
        EN_FEED,
        EN_MESS,
        EN_CALENDAR,
        EN_GAME,
        EN_GLOBAL
    ),
});
