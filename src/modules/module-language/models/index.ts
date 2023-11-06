/**
 *
 * @author dong.nguyenthanh@powergatesoftware.com on 26/07/2023.
 *
 */

/** constants */
import { localeObject } from '@module-language/constants/localeObject';

type LocaleType = keyof typeof localeObject;

type MessagesType = Readonly<{ [key in LocaleType]: Record<string, string> }>;

type LanguageContextProps = {
    locale: LocaleType;
    messages: Record<string, string>;
    toggleLanguage: (value: LocaleType) => void;
};

export type { LocaleType, MessagesType, LanguageContextProps };
