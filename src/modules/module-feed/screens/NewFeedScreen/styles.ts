/**
 *
 * @author dongntd267@gmail.com on 24/08/2023.
 *
 */

import makeStyles from '@mui/styles/makeStyles';

/** constants */
import { SCREEN_SIZE } from '@module-global/constants';

const useStyles = makeStyles(({ palette }) => ({
    screen: {
        flexDirection: 'row',
        width: '100%',
        height: '100%',
    },
    left_right: {
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        borderRadius: 0,
        maxWidth: SCREEN_SIZE.MESSENGER_LEFT_RIGHT_MAX_WIDTH,
    },
    mainContent: {
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        borderRadius: 0,
        borderLeft: `3px solid ${palette.divider}`,
        borderRight: `3px solid ${palette.divider}`,
    },
}));

export default useStyles;
