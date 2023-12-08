/**
 *
 * @author dongntd267@gmail.com on 24/08/2023.
 *
 */

import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles(({ spacing }) => ({
    screen: {
        flexDirection: 'row',
        width: '100%',
        height: '100%',
        padding: spacing(2),
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
