/**
 *
 * @author dongntd267@gmail.com on 24/08/2023.
 *
 */

import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles(({ spacing, palette }) => ({
    footer: {
        position: 'relative',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        padding: `${spacing(2)} ${spacing(2)}`,
        borderTop: `1px solid ${palette.divider}`,
    },
    footer_left: {
        position: 'absolute',
        left: spacing(2),
        top: 0,
        bottom: spacing(2),
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        gap: spacing(0),
        zIndex: 1,
        '& > button': {
            transition: 'transform 0.2s',
            transform: 'scale(1)',
        },
    },
    footer_left_hidden: {
        '& > button': {
            transform: 'scale(0)',
        },
    },
    footer_center: {
        zIndex: 999,
        width: '100%',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: `0 ${spacing(2)}`,
        gap: spacing(2),
        marginLeft: 80,
        transition: 'margin 0.3s',
        overflow: 'hidden',

        '& > .MuiTextField-root': {
            width: '100%',
            '& > .MuiInputBase-root': {
                borderRadius: 20,
                alignItems: 'flex-end',
                paddingLeft: spacing(2),
            },
        },
    },
    footer_center_full: {
        marginLeft: 0,
    },
    footer_right: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'center',
        width: 60,
        height: '100%',
        gap: spacing(1),
    },
}));

export default useStyles;
