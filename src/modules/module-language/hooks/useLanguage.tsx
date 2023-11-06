/**
 *
 * @author dong.nguyenthanh@powergatesoftware.com on 26/07/2023.
 *
 */

import * as React from 'react';

/** constants */
import { localeObject } from '@module-language/constants/localeObject';

/** types */
import type { ComponentType } from 'react';
import type { LocaleType, LanguageContextProps } from '@module-language/models';

const LanguageContext = React.createContext<LanguageContextProps>({
    locale: localeObject.vi,
    messages: {},
    toggleLanguage: (value: LocaleType) => value,
});

const useLanguage = () => React.useContext(LanguageContext);

function withLanguage<Props>(WrappedComponent: ComponentType<Props>) {
    return function EnhancedComponent(props: Props) {
        const language = useLanguage();
        return <WrappedComponent {...props} useLanguage={language} />;
    };
}

LanguageContext.displayName = 'LanguageContext';
// eslint-disable-next-line react-refresh/only-export-components
export { LanguageContext, useLanguage, withLanguage };
