/**
 *
 * @author dongntd267@gmail.com on 24/08/2023.
 *
 */

import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles(({ palette }) => ({
    notify: {
        width: '100%',
    },
    default: {
        color: palette.common.white,
        backgroundColor: palette.primary.main,
    },
    hidden: {
        display: 'none',
    },
    title: {
        textTransform: 'capitalize',
    },
}));

export default useStyles;
