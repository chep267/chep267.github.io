/**
 *
 * @author dongntd267@gmail.com on 24/08/2023.
 *
 */

import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles({
    board: {
        display: 'flex',
        flexDirection: 'column',
        width: 'auto',
        height: 'auto',
        borderRadius: 6,
        gap: 1,
        padding: 10,
    },
    row: {
        flexDirection: 'row',
        gap: 1,
    },
});

export default useStyles;
