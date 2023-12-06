/**
 *
 * @author dongntd267@gmail.com on 24/08/2023.
 *
 */

import makeStyles from '@mui/styles/makeStyles';
import { alpha } from '@mui/material/styles';

const useStyles = makeStyles(({ spacing, palette }) => ({
    selectDate: {
        position: 'relative',
        padding: `${spacing(1)} ${spacing(2)}`,
        borderRadius: 8,
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: alpha(palette.grey[50], 0.1),
        },
    },
    date_piker: {
        opacity: 0,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        cursor: 'pointer',
        '& .MuiInputBase-root': {
            cursor: 'pointer',
            height: '100%',
            padding: 0,
            '& > input': {
                display: 'none',
            },
            '& .MuiInputAdornment-root': {
                width: '100%',
                height: '100%',
                margin: 0,
                maxHeight: '100%',
                '& > button': {
                    width: '100%',
                    height: '100%',
                    borderRadius: 0,
                },
            },
        },
    },
}));

export default useStyles;
