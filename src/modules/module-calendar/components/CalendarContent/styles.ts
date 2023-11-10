/**
 *
 * @author dong.nguyenthanh@powergatesoftware.com on 24/08/2023.
 *
 */

import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles(({ palette }) => ({
    calendar: {
        width: '100%',
        height: '100%',
        padding: 'calc(1%)',
        '& thead > tr > th': {
            textAlign: 'center',
            width: 'calc(14%)',
        },
        '& tbody > tr > td': {
            textAlign: 'center',
        },
    },
    item: {
        margin: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
        height: 50,
        borderRadius: '50%',
    },
    itemHover: {
        '&:hover': {
            cursor: 'pointer',
            backgroundColor: palette.divider,
        },
    },
    itemToday: {
        borderRadius: '50%',
        color: palette.error.main,
        border: `1px solid ${palette.error.main}`,
    },
}));

export default useStyles;
