/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

/** lib components */
import { Favorite as FavoriteIcon } from '@mui/icons-material';

/** type */
import type { SvgIconOwnProps } from '@mui/material';

export default function EmojiMessage(props: SvgIconOwnProps) {
    const { color = 'primary', fontSize = 'large', ...other } = props;
    return <FavoriteIcon color={color} fontSize={fontSize} {...other} />;
}
