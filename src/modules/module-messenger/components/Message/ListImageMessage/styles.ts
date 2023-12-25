/**
 *
 * @author dongntd267@gmail.com on 24/08/2023.
 *
 */

import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles(({ palette }) => ({
    listImage: {
        width: 'auto',
    },
    image: {
        borderRadius: 6,
        overflow: 'hidden',
        minWidth: 120,
        minHeight: 120,
        backgroundColor: palette.divider,
        border: `1px solid ${palette.divider}`,
    },
}));

export default useStyles;
