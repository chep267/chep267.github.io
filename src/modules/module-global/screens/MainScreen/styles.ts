/**
 *
 * @author dongntd267@gmail.com on 24/08/2023.
 *
 */

import makeStyles from '@mui/styles/makeStyles';

/** constants */
import { SCREEN_SIZE } from '@module-global/constants';

export const useStyles = makeStyles({
    main: {
        position: 'relative',
        width: '100vw',
        height: '100vh',
    },
    mainBody: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        maxWidth: '100%',
        minWidth: '100%',
        height: `calc(100% - ${SCREEN_SIZE.HEADER_HEIGHT}px)`,
        maxHeight: `calc(100% - ${SCREEN_SIZE.HEADER_HEIGHT}px)`,
        minHeight: `calc(100% - ${SCREEN_SIZE.HEADER_HEIGHT}px)`,
    },
    mainContent: {
        display: 'flex',
        width: '100%',
        height: '100%',
        maxWidth: `calc(100% - ${SCREEN_SIZE.APP_BAR_MIN_WIDTH}px)`,
    },
});
