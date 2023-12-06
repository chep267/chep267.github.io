/**
 *
 * @author dongntd267@gmail.com on 24/08/2023.
 *
 */

import { alpha } from '@mui/material/styles';
import makeStyles from '@mui/styles/makeStyles';

/** constants */
import { SCREEN_SIZE } from '@module-global/constants/screen';

const useStyles = makeStyles(({ palette, breakpoints, spacing, zIndex }) => ({
    header: {
        ...(palette.mode === 'light'
            ? {
                  color: palette.primary.main,
                  backgroundColor: '#f0f2f5',
              }
            : {}),
        '& > .MuiToolbar-root': {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100vw',
            height: SCREEN_SIZE.HEADER_HEIGHT,
            maxHeight: SCREEN_SIZE.HEADER_HEIGHT,
            minHeight: SCREEN_SIZE.HEADER_HEIGHT,
            padding: `0 ${SCREEN_SIZE.HEADER_PADDING}px`,
            [breakpoints.down('sm')]: {
                padding: `0 ${spacing(1)}`,
            },
        },
        zIndex: zIndex.drawer + 1,
    },
    info: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: spacing(1),
    },
    infoIcon: {
        '& circle': { fill: palette.primary.main },
    },
    infoDot: {
        marginLeft: '20px !important',
        backgroundColor: palette.primary.main,
        width: spacing(1),
        height: spacing(1),
        borderRadius: '50%',
        [breakpoints.down('sm')]: {
            marginLeft: '0px !important',
        },
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
    menuPaper: { '& .MuiPaper-root': { top: `${SCREEN_SIZE.HEADER_HEIGHT + 10}px !important` } },
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

export default useStyles;
