/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

/** types */
import type { User } from 'firebase/auth';

export const defaultAuthState = Object.freeze({ isAuth: false, me: {} as User });
