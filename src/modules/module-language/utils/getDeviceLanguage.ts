/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

/** constants */
import { localeObject } from '@module-language/constants';

/** types */
import type { TypeLocale } from '@module-language/models';

export const getDeviceLanguage = (): TypeLocale => {
    const deviceLanguage = navigator.languages && navigator.languages.length ? navigator.languages[0] : navigator.language;
    // vi_VN | en_UK | en_US | ...
    const defaultLocal = `${deviceLanguage}`.slice(0, 2) as TypeLocale;
    return defaultLocal in localeObject ? defaultLocal : localeObject.en;
};
