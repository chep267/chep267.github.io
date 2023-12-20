/**
 *
 * @author dongntd267@gmail.com on 24/08/2023.
 *
 */

import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles(({ spacing, palette }) => ({
    message_view: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
    },
    partnerView: {
        justifyContent: 'flex-start',
    },
    meView: {
        justifyContent: 'flex-end',
    },
    partnerMessage: {
        textAlign: 'left',
        justifyContent: 'flex-start',
    },
    meMessage: {
        justifyContent: 'flex-end',
        backgroundColor: palette.primary.main,
    },
    message: {
        width: 'auto',
        maxWidth: '70%',
        padding: `5px ${spacing(2)}`,
        border: `1px solid ${palette.divider}`,
        borderRadius: 20,
        wordBreak: 'break-word',
        whiteSpace: 'pre-wrap',
    },
}));

export default useStyles;
