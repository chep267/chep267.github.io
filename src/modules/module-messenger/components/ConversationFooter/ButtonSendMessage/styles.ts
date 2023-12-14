/**
 *
 * @author dongntd267@gmail.com on 24/08/2023.
 *
 */

import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles({
    btnSend: {
        position: 'absolute',
        transition: 'transform 0.2s',
        transform: 'scale(0)',
        visibility: 'hidden',
    },
    btnVisible: {
        transform: 'scale(1)',
        visibility: 'visible',
    },
});

export default useStyles;
