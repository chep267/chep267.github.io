/**
 *
 * @author dongntd267@gmail.com on 24/08/2023.
 *
 */

import makeStyles from '@mui/styles/makeStyles';

export const useStyles = makeStyles(({ palette }) => ({
    calendar: {
        width: '100%',
        height: '100%',
        padding: 'calc(1%)',
        '& thead > tr > th': {
            textAlign: 'center',
            width: 'calc(14%)',
        },
        '& tbody': {
            '& > tr > td': {
                textAlign: 'center',
            },
            '& > tr:last-of-type > td': {
                border: 'none',
            },
        },
    },
    item: {
        margin: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
        height: 50,
        borderRadius: '50%',
    },
    itemHover: {
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: palette.divider,
        },
    },
    itemDifferentMonth: {
        color: palette.text.disabled,
    },
    itemSelectedDate: {
        borderRadius: '50%',
        backgroundColor: palette.divider,
    },
    itemWeekend: {
        color: palette.error.main,
        '&:hover': {
            color: palette.common.white,
            backgroundColor: palette.error.main,
        },
    },
    itemToday: {
        borderRadius: '50%',
        color: palette.primary.main,
        border: `1px solid ${palette.primary.main}`,
        backgroundColor: 'transparent',
        '&:hover': {
            color: palette.common.white,
            backgroundColor: palette.primary.main,
        },
    },
}));
