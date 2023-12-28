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
    listItem: {
        height: 80,
        padding: 0,
        '& .MuiListItemText-primary': {
            ...typography.h6,
            '& > h6': {
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
            },
        },
        '&:hover': {
            cursor: 'pointer',
            backgroundColor: alpha(palette.common.black, 0.1),
            '& > .MuiListItemButton-root > .MuiIconButton-root': {
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
