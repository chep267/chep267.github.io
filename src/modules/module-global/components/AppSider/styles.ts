/**
 *
 * @author dongntd267@gmail.com on 24/08/2023.
 *
 */

import makeStyles from '@mui/styles/makeStyles';

/** constants */
import { ScreenSize } from '@module-global/constants';

const useStyles = makeStyles(({ breakpoints }) => ({
    drawer: {
        width: ScreenSize.APP_BAR_MIN_WIDTH,
        height: '100%',
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        transition: 'width 0.6s',
        '& .MuiDrawer-paper': {
            transition: 'width 0.6s',
            top: ScreenSize.HEADER_HEIGHT,
        },
        overflow: 'hidden',
    },
    drawerOpen: {
        width: ScreenSize.APP_BAR_MAX_WIDTH,
        '& .MuiDrawer-paper': {
            width: ScreenSize.APP_BAR_MAX_WIDTH,
            overflowX: 'hidden',
        },
        [breakpoints.down(ScreenSize.APP_BAR_BREAKPOINT)]: {
            width: ScreenSize.APP_BAR_MIN_WIDTH,
            '& .MuiDrawer-paper': {
                width: ScreenSize.APP_BAR_MIN_WIDTH,
            },
        },
    },
    drawerClose: {
        width: ScreenSize.APP_BAR_MIN_WIDTH,
        '& .MuiDrawer-paper': {
            width: ScreenSize.APP_BAR_MIN_WIDTH,
        },
    },
}));

export default useStyles;
