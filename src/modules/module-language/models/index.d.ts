/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

/** constants */
import { localeObject } from '@module-language/constants';

/** types */
import type { PropsWithChildren } from 'react';

export type TypeLocale = keyof typeof localeObject;

export type TypeMessages = Readonly<{ [key in TypeLocale]: Record<string, string> }>;

export type LanguageContextProps = {
    data: {
        locale: TypeLocale;
        messages: Record<string, string>;
    };
    method: {
        setLanguage: (value: TypeLocale) => void;
    };
};

export type LanguageProviderProps = PropsWithChildren<{
    messages: TypeMessages;
}>;
