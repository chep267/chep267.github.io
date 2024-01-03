/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

/** types */
import type { AvatarProps, TypographyProps } from '@mui/material';
import type { UserInfo } from '@module-user/models/data';

/** UserAvatar */
export type UserAvatarProps = AvatarProps & { uid?: UserInfo['uid'] };

/** UserName */
export type UserNameProps = TypographyProps & { uid?: UserInfo['uid']; name?: UserInfo['displayName'] };
