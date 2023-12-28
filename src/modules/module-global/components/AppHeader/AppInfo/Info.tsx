/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import * as React from 'react';

/** lib components */
import { useNavigate } from 'react-router-dom';
import { Stack, Typography } from '@mui/material';

/** components */
import IconBase from '@module-base/components/IconBase';

/** constants */
import { APP_NAME } from '@root/utils/config';
import { SCREEN } from '@module-global/constants/screen';

/** styles */
import useStyles from './styles';

export default function Info() {
    const classes = useStyles();
    const navigate = useNavigate();

    return React.useMemo(() => {
        return (
            <Stack className={classes.info} onClick={() => navigate(SCREEN.HOME)}>
                <IconBase name="appLogo" className={classes.infoIcon} />
                <Typography variant="h5" fontWeight={600}>
                    {APP_NAME}
                </Typography>
            </Stack>
        );
    }, []);
}