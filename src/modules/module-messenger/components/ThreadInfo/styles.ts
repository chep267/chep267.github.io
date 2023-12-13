/**
 *
 * @author dongntd267@gmail.com on 24/08/2023.
 *
 */

import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles(({ spacing }) => ({
    thread_info: {
        width: '100%',
        alignItems: 'center',
        padding: `${spacing(3)} ${spacing(2)}`,
    },
    avatar: {
        width: 100,
        height: 100,
    },
}));

export default useStyles;
