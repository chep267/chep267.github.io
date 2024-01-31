/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

/** utils */
import { vi as viBase, en as enBase } from '@module-base/utils';
import { vi as viLang, en as enLang } from '@module-language/utils';
import { vi as viTheme, en as enTheme } from '@module-theme/utils/messages';
import { vi as viUser, en as enUser } from '@module-user/utils';
import { vi as viGlobal, en as enGlobal } from '@module-global/utils';
import { vi as viAuth, en as enAuth } from '@module-auth/utils';
import { vi as viFeed, en as enFeed } from '@module-feed/utils';
import { vi as viGame, en as enGame } from '@module-game/utils';
import { vi as viCalendar, en as enCalendar } from '@module-calendar/utils';
import { vi as viMess, en as enMess } from '@module-messenger/utils';

/** types */
import type { TypeMessages } from '@module-language/models';

export const messages: TypeMessages = Object.freeze({
    vi: Object.assign({}, viBase, viLang, viTheme, viUser, viGlobal, viAuth, viFeed, viMess, viCalendar, viGame),
    en: Object.assign({}, enBase, enLang, enTheme, enUser, enGlobal, enAuth, enFeed, enMess, enCalendar, enGame),
});
