/**
 *
 * @author dongntd267@gmail.com on 24/08/2023.
 *
 */

import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles(({ zIndex }) => ({
    menuPaper: {
        zIndex: zIndex.tooltip,
        '& .MuiPaper-root': {
            borderRadius: 10,
        },
    },
}));

export default useStyles;
