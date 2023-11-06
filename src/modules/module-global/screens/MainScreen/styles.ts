/**
 *
 * @author dong.nguyenthanh@powergatesoftware.com on 24/08/2023.
 *
 */

import makeStyles from '@mui/styles/makeStyles';

/** constants */
import { SCREEN_SIZE } from '@module-global/constants/screen';

const useStyles = makeStyles({
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
        flexGrow: 1,
        height: '100%',
    },
});

export default useStyles;
