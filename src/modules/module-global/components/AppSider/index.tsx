/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import * as React from 'react';
import classnames from 'classnames';

/** lib components */
import { FormattedMessage } from 'react-intl';
import { Drawer, Button, Divider, Tooltip } from '@mui/material';

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
import { useBase } from '@module-base/hooks/useBase';

/** styles */
import useStyles from './styles';

const AppSider = React.memo(() => {
    const {
        sider: { open, toggleSider },
    } = useBase();
    const classes = useStyles();

    return (
        <Drawer
            variant="permanent"
            open={open}
            className={classnames(classes.drawer, { [classes.drawerOpen]: open }, { [classes.drawerClose]: !open })}>
            <Tooltip
                title={
                    <FormattedMessage
                        {...baseMessage[`module.base.component.sider.button.${open ? 'collapse' : 'open'}.tooltip`]}
                    />
                }
                placement="right">
                <Button size="large" onClick={() => toggleSider((prev) => !prev)}>
                    {open ? <KeyboardDoubleArrowLeftIcon /> : <KeyboardDoubleArrowRightIcon />}
                </Button>
            </Tooltip>
            <Divider />
            <ListApp />
        </Drawer>
    );
});

AppSider.displayName = 'AppSider';
export default AppSider;
