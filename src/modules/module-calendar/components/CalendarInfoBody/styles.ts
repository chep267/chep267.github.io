/**
 *
 * @author dongntd267@gmail.com on 24/08/2023.
 *
 */

import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles(({ palette }) => ({
    body: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '70%',
        minHeight: 300,
        padding: 8,
    },
    selectDay: {
        alignItems: 'center',
    },
    solarDay: {
        fontSize: '12rem',
        color: palette.primary.main,
    },
    weekendDay: {
        color: palette.error.main,
    },
}));

export default useStyles;
