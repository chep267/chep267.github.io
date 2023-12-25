/**
 *
 * @author dongntd267@gmail.com on 24/08/2023.
 *
 */

import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles(({ palette, breakpoints, spacing }) => ({
    info: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: spacing(1),
    },
    infoIcon: {
        '& circle': { fill: palette.primary.main },
    },
    infoDot: {
        marginLeft: '20px !important',
        backgroundColor: palette.primary.main,
        width: spacing(1),
        height: spacing(1),
        borderRadius: '50%',
        [breakpoints.down('sm')]: {
            marginLeft: '0px !important',
        },
    },
}));

export default useStyles;
