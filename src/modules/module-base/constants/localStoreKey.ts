/**
 *
 * @author dong.nguyenthanh@powergatesoftware.com on 26/07/2023.
 *
 */

/** utils */
import { Encrypt } from '@module-base/utils/security';

export const accessTokenCookieKey = Encrypt('tola_access_token_cookie');
export const refreshTokenCookieKey = Encrypt('tola_refresh_token_cookie');
export const emailLocalKey = Encrypt('tola_email_local');
export const localeLocalKey = Encrypt('tola_locale_local');
export const themeLocalKey = Encrypt('tola_theme_local');
export const routerLocalKey = Encrypt('tola_router_local');
