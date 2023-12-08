/**
 *
 * @author dongntd267@gmail.com on 24/08/2023.
 *
 */

import makeStyles from '@mui/styles/makeStyles';
import { alpha } from '@mui/material/styles';

const useStyles = makeStyles(({ palette, spacing }) => ({
    screen: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        padding: spacing(2),
        overflow: 'hidden',
    },
    mainContent: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '100%',
        height: '100%',
        maxWidth: 640,
        maxHeight: 700,
        borderRadius: 6,
        overflow: 'auto',

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
    title: {
        padding: spacing(3),
        paddingBottom: 0,
    },
}));

export default useStyles;
