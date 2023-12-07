/**
 *
 * @author dongntd267@gmail.com on 24/08/2023.
 *
 */

import makeStyles from '@mui/styles/makeStyles';
import { alpha } from '@mui/material/styles';

const useStyles = makeStyles(({ palette, zIndex }) => ({
    gameOver: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: -1,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: alpha(palette.background.default, 0.8),
        visibility: 'hidden',
    },
    gameOverShow: {
        zIndex: zIndex.drawer,
        visibility: 'visible',
    },
}));

export default useStyles;
