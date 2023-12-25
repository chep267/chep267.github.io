/**
 *
 * @author dongntd267@gmail.com on 24/08/2023.
 *
 */

import makeStyles from '@mui/styles/makeStyles';

/** constants */
import { SCREEN_SIZE } from '@module-global/constants/screen.ts';

const useStyles = makeStyles(({ spacing }) => ({
    thread_title: {
        width: '100%',
        justifyContent: 'flex-end',
        padding: `0px ${spacing(2)} 5px`,
        height: SCREEN_SIZE.MESSENGER_LEFT_HEADER_HEIGHT,
        minHeight: SCREEN_SIZE.MESSENGER_LEFT_HEADER_HEIGHT,
        maxHeight: SCREEN_SIZE.MESSENGER_LEFT_HEADER_HEIGHT,
    },
}));

export default useStyles;
