/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import * as React from 'react';

/** constants */
import { emptyObject, emptyFunction } from '@module-base/constants/defaultValue';
import { localeObject } from '@module-language/constants/localeObject';

/** types */
import type { LanguageContextProps } from '@module-language/models';

const LanguageContext = React.createContext<LanguageContextProps>({
    data: {
        locale: localeObject.vi,
        messages: emptyObject,
    },
    method: {
        setLanguage: emptyFunction,
    },
});
LanguageContext.displayName = 'LanguageContext';

const useLanguage = () => React.useContext(LanguageContext);

export { LanguageContext, useLanguage };
