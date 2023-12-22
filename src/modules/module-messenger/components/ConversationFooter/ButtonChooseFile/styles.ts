/**
 *
 * @author dongntd267@gmail.com on 24/08/2023.
 *
 */

import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles(() => ({
    btnFile: {
        position: 'relative',
    },
    inputFile: {
        height: 1,
        overflow: 'hidden',
        position: 'absolute',
        whiteSpace: 'nowrap',
        bottom: 0,
        left: 0,
        width: 1,
        zIndex: -1,
    },
}));

export default useStyles;
