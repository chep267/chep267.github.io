/**
 *
 * @author dongntd267@gmail.com on 24/08/2023.
 *
 */

import makeStyles from '@mui/styles/makeStyles';

/** constants */
import { ScreenSize } from '@module-global/constants';

const useStyles = makeStyles(({ palette, spacing, typography, breakpoints }) => ({
    title: {
        paddingTop: spacing(3),
        paddingBottom: spacing(3),
        color: palette.primary.main,
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: spacing(3),
        padding: spacing(5),
        borderRadius: spacing(1),
        width: '100%',
        minWidth: ScreenSize.AUTH_FORM_MIN_WIDTH,
        maxWidth: ScreenSize.AUTH_FORM_MIN_WIDTH,
        [breakpoints.up('md')]: {
            minWidth: ScreenSize.AUTH_FORM_MAX_WIDTH,
            maxWidth: ScreenSize.AUTH_FORM_MAX_WIDTH,
        },
        transition: 'width 0.6s ease, min-width 0.6s ease, max-width 0.6s ease',
    },
    link: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        '& > a': {
            ...typography.h6,
            color: palette.primary.main,
            '&:hover': { color: palette.primary.light },
        },
    },
    btnSubmit: { borderRadius: spacing(10), ...typography.h6 },
}));

export default useStyles;
