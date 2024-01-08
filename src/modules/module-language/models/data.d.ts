/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

export type TypeLocale = 'vi' | 'en';

export type TypeMessages = Readonly<Record<TypeLocale, Record<string, string>>>;
