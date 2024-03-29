/**
 *
 * @author dongntd267@gmail.com on 24/08/2023.
 *
 */

import makeStyles from '@mui/styles/makeStyles';

/** constants */
import { ScreenSize } from '@module-global/constants';

const useStyles = makeStyles(({ zIndex }) => ({
    layout: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: '100%',
        maxWidth: '100%',
        minWidth: '100%',
        height: `calc(100% - ${ScreenSize.HEADER_HEIGHT}px)`,
        maxHeight: `calc(100% - ${ScreenSize.HEADER_HEIGHT}px)`,
        minHeight: `calc(100% - ${ScreenSize.HEADER_HEIGHT}px)`,
        overflow: 'auto',
    },
    form: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 'auto',
        zIndex: zIndex.fab,
    },
}));

export default useStyles;
