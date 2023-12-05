/**
 *
 * @author dongntd267@gmail.com on 24/08/2023.
 *
 */

import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles(({ palette, spacing }) => ({
    screen: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
    },
    mainContent: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '50%',
        height: '80%',
        minWidth: 400,
        borderRadius: 4,
        overflow: 'hidden',
    },
    body: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '70%',
        width: '100%',
        padding: spacing(3),
    },
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
        borderLeft: `2px solid ${palette.divider}`,
        borderTop: `2px solid ${palette.divider}`,
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: spacing(1.5),
    },
}));

export default useStyles;
