/**
 *
 * @author dongntd267@gmail.com on 24/08/2023.
 *
 */

import { alpha } from '@mui/material/styles';
import makeStyles from '@mui/styles/makeStyles';

/** constants */
import { ScreenSize } from '@module-global/constants';

export const useStyles = makeStyles(({ palette, spacing, zIndex }) => ({
    menu: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: spacing(1),
    },
    button: {
        minWidth: 40,
        width: 40,
        height: 40,
        borderRadius: '50%',
        padding: 0,
        margin: 0,
        backgroundColor: alpha(palette.primary.main, 0.1),
        borderColor: 'transparent',
        '&:hover': {
            backgroundColor: 'transparent',
            borderColor: palette.primary.main,
            '& > svg > path': {
                fill: palette.primary.main,
            },
        },
    },
    menuPaper: {
        zIndex: zIndex.tooltip,
        '& .MuiPaper-root': { top: `${ScreenSize.HEADER_HEIGHT + 10}px !important` },
    },
    menuIcon: {
        marginLeft: spacing(3),
    },
    loadingIcon: {
        margin: '3px 0',
    },
    flagIcon: {
        transform: 'scale(1.3)',
        color: palette.primary.main,
    },
}));
