/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import * as React from 'react';
import { IntlProvider } from 'react-intl';
import 'dayjs/locale/vi';

/** constants */
import { localeObject } from '@module-language/constants/localeObject';
import { localeLocalKey } from '@module-base/constants/localStoreKey';

/** utils */
import { Decrypt, Encrypt } from '@module-base/utils/security';
import { localStorageBase } from '@module-base/utils/storages';
import { getDeviceLanguage } from '@module-language/utils/helpers/getDeviceLanguage';

/** hooks */
import { LanguageContext } from '@module-language/hooks/useLanguage';

/** types */
import type { TypeLocale, LanguageProviderProps, LanguageContextProps } from '@module-language/models';

function LanguageProvider(props: LanguageProviderProps) {
    const { children, messages } = props;

    const [locale, setLocale] = React.useState<TypeLocale>(() => {
        const localeCookie = Decrypt(localStorageBase.get(localeLocalKey)) as TypeLocale;
        if (localeCookie && localeCookie in localeObject) {
            return localeCookie;
        }
        return getDeviceLanguage();
    });

    const setLanguage = React.useCallback<LanguageContextProps['method']['setLanguage']>((value) => {
        localStorageBase.set(localeLocalKey, Encrypt(value));
        setLocale(value);
    }, []);

    const store = React.useMemo<LanguageContextProps>(
        () => ({
            data: {
                locale,
                messages: messages[locale],
            },
            method: {
                setLanguage,
            },
        }),
        [locale]
    );

    return (
        <LanguageContext.Provider value={store}>
            <IntlProvider locale={locale} messages={messages[locale]}>
                {children}
            </IntlProvider>
        </LanguageContext.Provider>
    );
}

export default LanguageProvider;
