/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

/** constants */
import { localeObject } from '@module-language/constants';

/** types */
import type { PropsWithChildren } from 'react';

type TypeLocale = keyof typeof localeObject;

type TypeMessages = Readonly<{ [key in TypeLocale]: Record<string, string> }>;

type LanguageContextProps = {
    data: {
        locale: TypeLocale;
        messages: Record<string, string>;
    };
    method: {
        setLanguage: (value: TypeLocale) => void;
    };
};

type LanguageProviderProps = PropsWithChildren<{
    messages: TypeMessages;
}>;

export type { TypeLocale, TypeMessages, LanguageContextProps, LanguageProviderProps };
