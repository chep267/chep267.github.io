/**
 *
 * @author dongntd267@gmail.com on 24/08/2023.
 *
 */

import makeStyles from '@mui/styles/makeStyles';
import { alpha } from '@mui/material/styles';

const useStyles = makeStyles(({ spacing, palette }) => ({
    title: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        padding: spacing(2),
        textAlign: 'center',
    },
    today: {
        borderRadius: 8,
        backgroundColor: alpha(palette.grey[50], 0.1),
        '&:hover': {
            color: palette.primary.main,
        },
    },
    titleRight: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        minWidth: '50%',
        width: 'unset',
        textAlign: 'center',
    },
    titleIcon: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: spacing(2),
    },
}));

export default useStyles;
