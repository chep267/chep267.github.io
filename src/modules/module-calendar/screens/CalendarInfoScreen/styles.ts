/**
 *
 * @author dong.nguyenthanh@powergatesoftware.com on 24/08/2023.
 *
 */

import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles({
    screen: {
        flexDirection: 'row',
        width: '100%',
        height: '100%',
        padding: '6%',
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
});

export default useStyles;
