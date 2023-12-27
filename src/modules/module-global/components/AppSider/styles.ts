/**
 *
 * @author dongntd267@gmail.com on 24/08/2023.
 *
 */

import makeStyles from '@mui/styles/makeStyles';

/** constants */
import { SCREEN_SIZE } from '@module-global/constants/screen';

const useStyles = makeStyles({
    drawer: {
        width: SCREEN_SIZE.APP_BAR_MIN_WIDTH,
        height: '100%',
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        transition: 'width 0.6s',
        '& .MuiDrawer-paper': {
            transition: 'width 0.6s',
            top: SCREEN_SIZE.HEADER_HEIGHT,
        },
    },
    drawerOpen: {
        width: SCREEN_SIZE.APP_BAR_MAX_WIDTH,
        overflowX: 'hidden',
        '& .MuiDrawer-paper': {
            width: SCREEN_SIZE.APP_BAR_MAX_WIDTH,
            overflowX: 'hidden',
        },
    },
    drawerClose: {
        width: SCREEN_SIZE.APP_BAR_MIN_WIDTH,
        overflowX: 'hidden',
        '& .MuiDrawer-paper': {
            width: SCREEN_SIZE.APP_BAR_MIN_WIDTH,
            overflowX: 'hidden',
        },
    },
});

export default useStyles;
