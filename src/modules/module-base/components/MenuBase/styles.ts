/**
 *
 * @author dongntd267@gmail.com on 24/08/2023.
 *
 */

import makeStyles from '@mui/styles/makeStyles';

/** constants */
import { alpha } from '@mui/material/styles';

const useStyles = makeStyles(({ palette }) => ({
    menu: {
        '& .MuiPaper-root': {
            '&::-webkit-scrollbar': {
                width: '7px',
                height: '7px',
            },
            '&::-webkit-scrollbar-track': {
                borderRadius: '10px',
                backgroundColor: alpha(palette.common.black, 0.1),
            },
            '&::-webkit-scrollbar-thumb': {
                borderRadius: '10px',
                backgroundColor: alpha(palette.common.black, 0.2),
            },
            '&::-webkit-scrollbar-thumb:hover': {
                backgroundColor: alpha(palette.common.black, 0.4),
            },
            '&::-webkit-scrollbar-thumb:active': {
                backgroundColor: alpha(palette.common.black, 0.9),
            },
        },
    },
}));

export default useStyles;
