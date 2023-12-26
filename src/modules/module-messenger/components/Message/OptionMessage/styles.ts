/**
 *
 * @author dongntd267@gmail.com on 24/08/2023.
 *
 */

import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles(({ palette, spacing, zIndex }) => ({
    menuPaper: {
        zIndex: zIndex.tooltip,
    },
    menuIcon: {
        marginLeft: spacing(3),
    },
    loadingIcon: {
        margin: '3px 0',
    },
    flagIcon: {
        transform: 'scale(1.3)',
        color: palette.primary.main,
    },
}));

export default useStyles;
