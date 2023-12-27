/**
 *
 * @author dongntd267@gmail.com on 24/08/2023.
 *
 */

import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles(({ palette, spacing }) => ({
    listApp: {
        width: '100%',
        '& .MuiListItemButton-root': {
            borderRadius: 8,
        },
    },
    listItem: {
        width: '100%',
        padding: spacing(1),
        '& .MuiListItemButton-root': {
            borderRadius: 8,
            minHeight: 50,
        },
        '& .MuiListItemText-root > .MuiListItemText-primary': {
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
        },
    },
    listItemSelected: {
        '& .MuiListItemButton-root': {
            backgroundColor: palette.primary.dark,
            '& .MuiListItemText-root, .MuiSvgIcon-root': {
                color: palette.common.white,
            },
        },
    },
}));

export default useStyles;
