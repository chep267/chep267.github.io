/**
 *
 * @author dongntd267@gmail.com on 24/08/2023.
 *
 */

import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles(({ palette }) => ({
    screen: {
        flexDirection: 'row',
        width: '100%',
        height: '100%',
        padding: 50,
        gap: 20,
    },
    gameItem: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '&:hover': {
            '& > .MuiStack-root': {
                backgroundColor: palette.divider,
            },
            '& > .MuiTypography-root': {
                color: palette.primary.main,
            },
        },
    },
    gameLogo: {
        backgroundColor: 'transparent',
        borderRadius: 6,
        width: 60,
        height: 60,
        backgroundSize: '50px 50px',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    },
}));

export default useStyles;
