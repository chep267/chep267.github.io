/**
 *
 * @author dongntd267@gmail.com on 24/08/2023.
 *
 */

import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles(({ spacing, palette, breakpoints }) => ({
    message_view: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        gap: spacing(2),
        '& > button': {
            visibility: 'hidden',
        },
        '&:hover > button': {
            visibility: 'visible',
        },
    },
    partnerView: {
        justifyContent: 'flex-start',
    },
    meView: {
        justifyContent: 'flex-end',
    },

    message: {
        width: 'auto',
        maxWidth: '50%',
        justifyContent: 'center',
        gap: 4,
        [breakpoints.down('md')]: {
            maxWidth: '70%',
        },
    },
    partnerMessage: {
        alignItems: 'flex-start',
    },
    meMessage: {
        alignItems: 'flex-end',
        '& > div[class*="textMessage"]': {
            backgroundColor: palette.primary.main,
            color: palette.common.white,
        },
    },
    textMessage: {
        width: 'auto',
        padding: `5px ${spacing(2)}`,
        border: `1px solid ${palette.divider}`,
        borderRadius: 20,
        wordBreak: 'break-word',
        whiteSpace: 'pre-wrap',
    },
}));

export default useStyles;
