/**
 *
 * @author dong.nguyenthanh@powergatesoftware.com on 24/08/2023.
 *
 */

import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles(({ spacing }) => ({
    title: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        padding: spacing(3),
    },
    titleIcon: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: spacing(2),
    },
}));

export default useStyles;
