/**
 *
 * @author dongntd267@gmail.com on 24/08/2023.
 *
 */

import makeStyles from '@mui/styles/makeStyles';

/** constants */
import { SCREEN_SIZE } from '@module-global/constants';

export const useStyles = makeStyles(({ palette, zIndex }) => ({
    layout: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: '100%',
        maxWidth: '100%',
        minWidth: '100%',
        height: `calc(100% - ${SCREEN_SIZE.HEADER_HEIGHT}px)`,
        maxHeight: `calc(100% - ${SCREEN_SIZE.HEADER_HEIGHT}px)`,
        minHeight: `calc(100% - ${SCREEN_SIZE.HEADER_HEIGHT}px)`,
        overflow: 'auto',
    },
    notFound: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        zIndex: zIndex.fab,
        '& svg': {
            fill: () => palette.error.main,
        },
    },
}));
