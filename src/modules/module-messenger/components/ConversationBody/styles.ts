/**
 *
 * @author dongntd267@gmail.com on 24/08/2023.
 *
 */

import makeStyles from '@mui/styles/makeStyles';
import { alpha } from '@mui/material/styles';

const useStyles = makeStyles(({ spacing, palette, typography }) => ({
    body: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        height: '100%',
        padding: `${spacing(3)} ${spacing(2)}`,
    },
    listItem: {
        '& .MuiListItemText-primary': {
            ...typography.h6,
        },
        '&:hover': {
            cursor: 'pointer',
            backgroundColor: alpha(palette.common.black, 0.1),
            '& > .MuiIconButton-root': {
                display: 'flex',
            },
        },
    },
    listItemSelected: {
        backgroundColor: alpha(palette.common.black, 0.1),
        '& .MuiListItemText-primary': {
            color: palette.primary.main,
        },
    },
    itemOption: {
        display: 'none',
    },
}));

export default useStyles;
