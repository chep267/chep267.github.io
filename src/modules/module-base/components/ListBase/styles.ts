/**
 *
 * @author dongntd267@gmail.com on 24/08/2023.
 *
 */

import makeStyles from '@mui/styles/makeStyles';

/** constants */
import { alpha } from '@mui/material/styles';

const useStyles = makeStyles(({ palette, spacing }) => ({
    list_wrap: {
        position: 'relative',
        width: '100%',
        height: '100%',
    },
    list: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        width: '100%',
        height: '100%',
        zIndex: 1,
        overflow: 'hidden auto',
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
    listLoading: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1,
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        width: '100%',
        height: '100%',
        backgroundColor: alpha(palette.divider, 0.05),
    },
    menuIcon: {
        marginLeft: spacing(3),
    },
    loadingIcon: {
        margin: '3px 0',
    },
}));

export default useStyles;
