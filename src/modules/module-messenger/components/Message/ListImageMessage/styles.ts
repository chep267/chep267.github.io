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
        overflow: 'hidden',
        minWidth: 150,
        maxWidth: 150,
        maxHeight: 150,
        minHeight: 150,
        '& > img': {
            width: '100%',
            height: '100%',
            border: `1px solid ${palette.divider}`,
            borderRadius: 6,
        },
    },
}));

export default useStyles;
