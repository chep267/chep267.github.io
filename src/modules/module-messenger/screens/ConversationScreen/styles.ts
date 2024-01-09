/**
 *
 * @author dongntd267@gmail.com on 24/08/2023.
 *
 */

import makeStyles from '@mui/styles/makeStyles';

/** constants */
import { ScreenSize } from '@module-global/constants';

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
        overflow: 'hidden',
    },
    left: {
        maxWidth: ScreenSize.MESSENGER_LEFT_RIGHT_MAX_WIDTH,
        transition: 'all 0.3s ease-in-out, background-color 0s',
        [breakpoints.down('xl')]: {
            minWidth: ScreenSize.MESSENGER_LEFT_MEDIUM_WIDTH,
            maxWidth: ScreenSize.MESSENGER_LEFT_MEDIUM_WIDTH,
        },
        [breakpoints.down('md')]: {
            minWidth: ScreenSize.MESSENGER_LEFT_MIN_WIDTH,
            maxWidth: ScreenSize.MESSENGER_LEFT_MIN_WIDTH,
            '& div[class*=".ThreadTitle"], div[class*=".ThreadSearch"]': {
                position: 'absolute',
                zIndex: -1,
                visibility: 'hidden',
            },
            '& li[class*=".ThreadItem"]': {
                '& > div:last-of-type, button': {
                    visibility: 'hidden',
                    width: 0,
                },
            },
        },
        [breakpoints.down('sm')]: {
            minWidth: 0,
            maxWidth: 0,
        },
    },
    right: {
        borderLeft: `1px solid ${palette.divider}`,
        maxWidth: ScreenSize.MESSENGER_LEFT_RIGHT_MAX_WIDTH,
        transition: 'all 0.3s ease-in-out, height 0s, background-color 0s',
        [breakpoints.down('xl')]: {
            minWidth: ScreenSize.MESSENGER_LEFT_MEDIUM_WIDTH,
            maxWidth: ScreenSize.MESSENGER_LEFT_MEDIUM_WIDTH,
        },
        [breakpoints.down('lg')]: {
            position: 'fixed',
            top: ScreenSize.HEADER_HEIGHT + ScreenSize.MESSENGER_CENTER_HEADER_HEIGHT,
            right: 0,
            zIndex: zIndex.drawer,
            minWidth: ScreenSize.MESSENGER_LEFT_MEDIUM_WIDTH,
            maxWidth: ScreenSize.MESSENGER_LEFT_MEDIUM_WIDTH,
            maxHeight: `calc(100% - ${ScreenSize.HEADER_HEIGHT + ScreenSize.MESSENGER_CENTER_HEADER_HEIGHT}px)`,
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
        border: 'none',
    },
}));

export default useStyles;
