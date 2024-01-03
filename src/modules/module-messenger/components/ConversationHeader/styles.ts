/**
 *
 * @author dongntd267@gmail.com on 24/08/2023.
 *
 */

import makeStyles from '@mui/styles/makeStyles';

/** constants */
import { SCREEN_SIZE } from '@module-global/constants';

const useStyles = makeStyles(({ spacing, palette }) => ({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        padding: `${spacing(3)} ${spacing(2)}`,
        borderBottom: `1px solid ${palette.divider}`,
        height: SCREEN_SIZE.MESSENGER_CENTER_HEADER_HEIGHT,
        minHeight: SCREEN_SIZE.MESSENGER_CENTER_HEADER_HEIGHT,
        maxHeight: SCREEN_SIZE.MESSENGER_CENTER_HEADER_HEIGHT,
    },
    header_left: {
        width: '100%',
    },
    header_right: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: spacing(1),
    },
}));

export default useStyles;
