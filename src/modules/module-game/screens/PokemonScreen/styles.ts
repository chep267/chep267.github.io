/**
 *
 * @author dongntd267@gmail.com on 24/08/2023.
 *
 */

import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles(({ spacing }) => ({
    screen: {
        position: 'relative',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        overflow: 'auto',
    },
    header: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        height: 100,
        minHeight: 100,
    },
    lineDuration: {
        width: '70%',
    },
    body: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'auto',
        padding: spacing(1.5),
    },
    boardGame: {
        overflow: 'auto',
        maxWidth: `calc(100% - ${spacing(3)})`,
        maxHeight: '100%',
    },
}));

export default useStyles;
