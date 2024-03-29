/**
 *
 * @author dongntd267@gmail.com on 24/08/2023.
 *
 */

import makeStyles from '@mui/styles/makeStyles';

/** constants */
import { ScreenSize } from '@module-global/constants';

const useStyles = makeStyles(({ spacing, breakpoints }) => ({
    screen: {
        flexDirection: 'row',
        width: '100%',
        height: '100%',
        padding: `${spacing(5)} 10%`,
        [breakpoints.down(ScreenSize.APP_BAR_BREAKPOINT)]: {
            padding: 0,
        },
    },
    mainContent: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        borderRadius: 8,
        overflow: 'hidden',
    },
}));

export default useStyles;
