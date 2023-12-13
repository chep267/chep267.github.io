/**
 *
 * @author dongntd267@gmail.com on 24/08/2023.
 *
 */

import makeStyles from '@mui/styles/makeStyles';

/** constants */
import { SCREEN_SIZE } from '@module-global/constants/screen';

const useStyles = makeStyles(({ palette, breakpoints, zIndex }) => ({
    screen: {
        position: 'relative',
        flexDirection: 'row',
        width: '100%',
        height: '100%',
    },
    layoutDefault: {
        display: 'flex',
        position: 'relative',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        height: '100%',
        borderRadius: 0,
    },
    left: {
        maxWidth: SCREEN_SIZE.MESSENGER_LEFT_RIGHT_MAX_WIDTH,
        transition: 'all 0.3s ease-in-out',
        [breakpoints.down('xl')]: {
            minWidth: SCREEN_SIZE.MESSENGER_LEFT_MEDIUM_WIDTH,
            maxWidth: SCREEN_SIZE.MESSENGER_LEFT_MEDIUM_WIDTH,
        },
        [breakpoints.down('md')]: {
            minWidth: SCREEN_SIZE.MESSENGER_LEFT_MIN_WIDTH,
            maxWidth: SCREEN_SIZE.MESSENGER_LEFT_MIN_WIDTH,
        },
        [breakpoints.down('sm')]: {
            minWidth: 0,
            maxWidth: 0,
        },
        '&:hover > ul[class*="list"]': {
            overflow: 'hidden',
            height: 0,
            padding: 0,
            margin: 0,
            borderRadius: '50%',
        },
    },
    right: {
        borderLeft: `1px solid ${palette.divider}`,
        maxWidth: SCREEN_SIZE.MESSENGER_LEFT_RIGHT_MAX_WIDTH,
        transition: 'all 0.3s ease-in-out, height 0s',
        [breakpoints.down('lg')]: {
            position: 'absolute',
            top: SCREEN_SIZE.HEADER_HEIGHT,
            right: 10,
            zIndex: zIndex.drawer,
            border: '1px dashed red',
            minWidth: SCREEN_SIZE.MESSENGER_LEFT_MEDIUM_WIDTH,
            maxWidth: SCREEN_SIZE.MESSENGER_LEFT_MEDIUM_WIDTH,
            height: `calc(100vh - ${SCREEN_SIZE.HEADER_HEIGHT * 2}px - 20px)`,
        },
        [breakpoints.down('xl')]: {
            minWidth: SCREEN_SIZE.MESSENGER_LEFT_MEDIUM_WIDTH,
            maxWidth: SCREEN_SIZE.MESSENGER_LEFT_MEDIUM_WIDTH,
        },
    },
    center: {
        borderLeft: `1px solid ${palette.divider}`,
    },
    right_hidden: {
        minWidth: 0,
        maxWidth: 0,
        visibility: 'hidden',
        zIndex: -1,
    },
}));

export default useStyles;
