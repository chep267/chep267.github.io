/**
 *
 * @author dongntd267@gmail.com on 24/08/2023.
 *
 */

import makeStyles from '@mui/styles/makeStyles';

export const useStyles = makeStyles(({ zIndex }) => ({
    fallback: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
    },
    content: {
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: zIndex.modal,
        '& img': {
            width: 'auto',
            height: 150,
            borderRadius: '50%',
        },
    },
}));
