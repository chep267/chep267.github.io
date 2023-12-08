/**
 *
 * @author dongntd267@gmail.com on 24/08/2023.
 *
 */

import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles(({ palette, spacing }) => ({
    footer: {
        display: 'flex',
        flexDirection: 'row',
        height: '30%',
        width: '100%',
        '& div:first-of-type': {
            borderLeft: 'none',
        },
    },
    footerItem: {
        display: 'flex',
        flex: 1,
        width: '30%',
        minWidth: 120,
        minHeight: 150,
        borderLeft: `2px solid ${palette.divider}`,
        borderTop: `2px solid ${palette.divider}`,
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: spacing(1.5),
    },
}));

export default useStyles;
