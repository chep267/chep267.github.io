/**
 *
 * @author dongntd267@gmail.com on 24/08/2023.
 *
 */

import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles(({ spacing, typography }) => ({
    body: {
        '& > ul': {
            scrollBehavior: 'smooth',
            padding: `${spacing(3)} ${spacing(2)}`,
        },
    },
    listItem: {
        '& .MuiListItemText-primary': {
            ...typography.h6,
        },
    },
}));

export default useStyles;
