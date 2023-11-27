/**
 *
 * @author dongntd267@gmail.com on 24/08/2023.
 *
 */

import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles(({ zIndex, spacing }) => ({
    listSearch: {
        position: 'sticky',
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
            '& > .MuiInputBase-root': {
                borderRadius: 20,
            },
        },
        '& > .MuiIconButton-root': {
            transition: 'all 0.25s linear',
        },
    },
    listSearch_hidden: {
        gap: spacing(0),
        '& > .MuiIconButton-root': {
            visibility: 'hidden',
            overflow: 'hidden',
            width: 0,
            padding: 0,
        },
    },
}));

export default useStyles;
