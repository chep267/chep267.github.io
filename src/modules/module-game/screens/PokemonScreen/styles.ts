/**
 *
 * @author dongntd267@gmail.com on 24/08/2023.
 *
 */

import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles({
    screen: {
        flexDirection: 'row',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    mainContent: {
        display: 'flex',
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 0,
        overflow: 'auto',
        gap: 1,
    },
    row: {
        flexDirection: 'row',
        gap: 1,
    },
});

export default useStyles;
