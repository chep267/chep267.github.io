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
import { getDeviceLanguage } from '@module-language/utils/helpers';

/** hooks */
import { LanguageContext } from '@module-language/hooks/useLanguage';

/** types */
import type { PropsWithChildren } from 'react';
import type { LocaleType, MessagesType, LanguageContextProps } from '@module-language/models';

type LanguageProviderProps = PropsWithChildren<{
    messages: MessagesType;
}>;

function LanguageProvider(props: LanguageProviderProps) {
    const { children, messages } = props;

    const [locale, setLocale] = React.useState<LocaleType>(() => {
        const localeCookie = Decrypt(localStorageBase.get(localeLocalKey)) as LocaleType;
        if (localeCookie && localeCookie in localeObject) {
            return localeCookie;
        }
        return getDeviceLanguage();
    });

    const toggleLanguage = React.useCallback((value: LocaleType) => {
        setLocale((prev) => {
            if (prev !== value) {
                localStorageBase.set(localeLocalKey, Encrypt(value));
            }
            return value;
        });
    }, []);

    const store = React.useMemo<LanguageContextProps>(
        () => ({
            locale,
            messages: messages[locale],
            toggleLanguage,
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
