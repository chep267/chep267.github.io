/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import * as React from 'react';
import classnames from 'classnames';

/** lib components */
import { FormattedMessage } from 'react-intl';
import { Drawer, Button, Divider, Tooltip, useMediaQuery } from '@mui/material';

/** icons */
import {
    KeyboardDoubleArrowRight as KeyboardDoubleArrowRightIcon,
    KeyboardDoubleArrowLeft as KeyboardDoubleArrowLeftIcon,
} from '@mui/icons-material';

/** components */
import ListApp from './ListApp';

/** utils */
import { baseMessage } from '@module-base/utils/messages';

/** hooks */
import { useSider } from '@module-global/hooks';

/** styles */
import useStyles from './styles';

/** types */
import type { Theme } from '@mui/material';

const AppSider = React.memo(() => {
    const {
        data: { openSider },
        method: { setOpenSider },
    } = useSider();
    const classes = useStyles();
    const isTooltip = useMediaQuery<Theme>((theme) => theme.breakpoints.down('md'));

    return (
        <Drawer
            variant="permanent"
            open={openSider}
            className={classnames(
                classes.drawer,
                { [classes.drawerOpen]: openSider },
                { [classes.drawerClose]: !openSider }
            )}>
            <Tooltip
                title={
                    <FormattedMessage
                        {...baseMessage[`module.base.component.sider.button.${openSider ? 'collapse' : 'open'}.tooltip`]}
                    />
                }
                placement="right">
                <Button size="large" onClick={() => setOpenSider((prev) => !prev)}>
                    {openSider ? <KeyboardDoubleArrowLeftIcon /> : <KeyboardDoubleArrowRightIcon />}
                </Button>
            </Tooltip>
            <Divider />
            <ListApp isTooltip={!openSider || isTooltip} />
        </Drawer>
    );
});

AppSider.displayName = 'AppSider';
export default AppSider;
