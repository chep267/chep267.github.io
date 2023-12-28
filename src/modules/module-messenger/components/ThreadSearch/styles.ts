/**
 *
 * @author dongntd267@gmail.com on 24/08/2023.
 *
 */

import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles(({ zIndex, spacing }) => ({
    inputSearch: {
        position: 'relative',
        top: 0,
        zIndex: zIndex.appBar,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: spacing(2),
        padding: spacing(1),
        '& > .MuiTextField-root': {
            width: '100%',
            marginLeft: 50,
            transition: 'margin 0.3s',
            '& > .MuiInputBase-root': {
                borderRadius: 20,
            },
        },
        '& > .MuiIconButton-root': {
            position: 'absolute',
            zIndex: 1,
            transform: 'scale(1)',
            transition: 'transform 0.2s',
        },
    },
    inputSearch_blur: {
        gap: spacing(0),
        '& > .MuiTextField-root': {
            marginLeft: 0,
        },
        '& > .MuiIconButton-root': {
            transform: 'scale(0)',
        },
    },
}));

export default useStyles;
