/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import * as React from 'react';

/** lib components */
import { IconButton } from '@mui/material';
import { Info as InfoIcon } from '@mui/icons-material';

/** hooks */
import { useMessenger } from '@module-messenger/hooks';

export default function IconThreadInfo() {
    const { method } = useMessenger();

    const onClick = React.useCallback(() => {
        method.setOpenThreadInfo((prev) => !prev);
    }, []);

    return (
        <IconButton onClick={onClick}>
            <InfoIcon color="primary" />
        </IconButton>
    );
}
