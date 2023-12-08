/**
 *
 * @author dongntd267@gmail.com on 24/08/2023.
 *
 */

import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles({
    '@keyframes timing': {
        '0%': {
            width: '100%',
        },
        '100%': {
            width: '0%',
        },
    },

    line: {
        position: 'relative',
        width: '100%',
        height: 4,
        borderRadius: 20,
        backgroundImage: 'linear-gradient(to right, red,orange,yellow,green)',
        '&:before': {
            content: '""',
            position: 'absolute',
            borderRadius: 20,
            top: 0,
            left: 0,
            bottom: 0,
            animationTimingFunction: 'linear',
        },
    },
    lineStart: {
        backgroundImage: 'none',
        '&:before': {
            backgroundImage: 'linear-gradient(to right, red,orange,yellow,green)',
            animationName: '$timing',
        },
    },
    lineStop: {
        opacity: 0.2,
    },
});

export default useStyles;
