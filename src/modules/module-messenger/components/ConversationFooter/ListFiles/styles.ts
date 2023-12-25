/**
 *
 * @author dongntd267@gmail.com on 24/08/2023.
 *
 */

import makeStyles from '@mui/styles/makeStyles';
import { alpha } from '@mui/material/styles';

const useStyles = makeStyles(({ spacing, palette }) => ({
    list_wrap: {
        position: 'relative',
        flexDirection: 'row',
        padding: `0 2px ${spacing(2)} 2px`,
        gap: spacing(2),
        width: '100%',
        overflow: 'auto hidden',
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
    list_item: {
        width: 80,
        minWidth: 80,
        maxWidth: 80,
        height: 80,
        borderRadius: 10,
        backgroundColor: 'red',
        overflow: 'hidden',
        position: 'relative',
        '& > img': {
            width: '100%',
            height: '100%',
        },
        '&:hover > button': {
            visibility: 'visible',
        },
    },
    iconRemove: {
        position: 'absolute',
        visibility: 'hidden',
        top: 2,
        right: 2,
        border: `1px solid ${palette.error.main}`,
        padding: 0,
        '& > svg': {
            color: palette.error.main,
        },
        '&:hover': {
            backgroundColor: palette.error.main,
            '& > svg': {
                color: palette.common.white,
            },
        },
    },
}));

export default useStyles;
