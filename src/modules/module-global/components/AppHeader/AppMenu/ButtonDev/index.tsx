/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import { Tooltip, Button } from '@mui/material';

/** utils */
import { useNotify } from '@module-base/hooks';

/** styles */
import useStyles from '../styles';

export default function ButtonDev(props: any) {
    const { tooltip, icon } = props;
    const NOTIFY = useNotify();
    const classes = useStyles();

    const onDev = () => {
        NOTIFY.method.toggleNotify({ open: true, mode: 'warning', message: 'In developing!' });
    };

    return (
        <Tooltip title={tooltip}>
            <Button className={classes.button} variant="outlined" onClick={onDev}>
                {icon}
            </Button>
        </Tooltip>
    );
}
