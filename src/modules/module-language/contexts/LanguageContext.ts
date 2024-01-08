/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import * as React from 'react';

/** constants */
import { emptyFunction, emptyObject } from '@module-base/constants/defaulValue';
import { localeObject } from '@module-language/constants';

/** types */
import type { LanguageContextProps } from '@module-language/models';

export const LanguageContext = React.createContext<LanguageContextProps>({
    data: {
        locale: localeObject.vi,
        messages: emptyObject,
    },
    method: {
        setLanguage: emptyFunction,
    },
});

LanguageContext.displayName = 'LanguageContext';
