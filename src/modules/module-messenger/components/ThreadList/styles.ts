/**
 *
 * @author dongntd267@gmail.com on 24/08/2023.
 *
 */

import makeStyles from '@mui/styles/makeStyles';

/** constants */
import { alpha } from '@mui/material/styles';

const useStyles = makeStyles(({ palette, typography }) => ({
    list: {
        '& div[class*="listLoading"]': {
            paddingTop: 40,
            justifyContent: 'flex-start',
        },
    },
    list_hidden: {
        visibility: 'hidden',
        overflow: 'hidden',
        height: 0,
        padding: 0,
        margin: 0,
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
