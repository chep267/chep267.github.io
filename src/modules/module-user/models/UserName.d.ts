/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

/** types */
import type { TypographyProps } from '@mui/material';
import type { UserInfo } from '@firebase/auth';

export type UserNameProps = TypographyProps & { uid?: UserInfo['uid']; name?: UserInfo['displayName'] };
