/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

/** types */
import type { AvatarProps } from '@mui/material';
import type { UserInfo } from 'firebase/auth';

export type UserAvatarProps = AvatarProps & { uid?: UserInfo['uid'] };
