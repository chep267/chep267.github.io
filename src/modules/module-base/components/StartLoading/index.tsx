/**
 *
 * @author dong.nguyenthanh@powergatesoftware.com on 26/07/2023.
 *
 */

/** lib components */
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

/** styles */
import useStyles from './styles';

export default function StartLoading() {
    const classes = useStyles();

    return (
        <Stack className={classes.screen}>
            <Stack className={classes.startElement}>
                <Typography variant="h4" className={classes.textStart}>
                    start
                </Typography>
                <Typography className={classes.textLoading} />
            </Stack>
        </Stack>
    );
}
