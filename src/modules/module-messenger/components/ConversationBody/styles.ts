/**
 *
 * @author dongntd267@gmail.com on 24/08/2023.
 *
 */

import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles(({ spacing }) => ({
    body: {
        '& > ul': {
            scrollBehavior: 'smooth',
            padding: `${spacing(3)} ${spacing(2)}`,
        },
    },
    listItem: {
        width: '100%',
    },
}));

export default useStyles;
