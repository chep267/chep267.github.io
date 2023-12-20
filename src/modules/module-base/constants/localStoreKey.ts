/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

/** utils */
import { Encrypt } from '@module-base/utils/security';

export const accessTokenCookieKey = Encrypt('access_token', 'tola_local');
export const refreshTokenCookieKey = Encrypt('refresh_token', 'tola_local');
export const emailLocalKey = Encrypt('email', 'tola_local');
export const localeLocalKey = Encrypt('locale', 'tola_local');
export const themeLocalKey = Encrypt('theme', 'tola_local');
export const routerLocalKey = Encrypt('router', 'tola_local');
