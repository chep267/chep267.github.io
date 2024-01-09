/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import * as React from 'react';
import { IntlProvider } from 'react-intl';
import 'dayjs/locale/vi';

/** constants */
import { localeObject, LanguageContext } from '@module-language/constants';
import { localeLocalKey } from '@module-base/constants';

/** utils */
import { localStorageBase, Crypto } from '@module-base/utils';
import { getDeviceLanguage } from '@module-language/utils';

/** types */
import type { TypeLocale, LanguageProviderProps, LanguageContextProps } from '@module-language/models';

function LanguageProvider(props: LanguageProviderProps) {
    const { children, messages } = props;

    const [locale, setLocale] = React.useState<TypeLocale>(() => {
        const localeCookie = Crypto.decrypt(localStorageBase.get(localeLocalKey)) as TypeLocale;
        if (localeCookie && localeCookie in localeObject) {
            return localeCookie;
        }
        return getDeviceLanguage();
    });

    const setLanguage = React.useCallback<LanguageContextProps['method']['setLanguage']>((value) => {
        localStorageBase.set(localeLocalKey, Crypto.encrypt(value));
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
