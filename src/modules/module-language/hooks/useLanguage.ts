/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import * as React from 'react';

/** contexts */
import { LanguageContext } from '@module-language/contexts';

export const useLanguage = () => React.useContext(LanguageContext);
