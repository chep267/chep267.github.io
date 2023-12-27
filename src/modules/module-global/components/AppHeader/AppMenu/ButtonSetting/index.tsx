/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import * as React from 'react';

/** lib components */
import { FormattedMessage } from 'react-intl';

/** icons */
import { Menu as MenuIcon } from '@mui/icons-material';

/** components */
import MenuBase from '@module-base/components/MenuBase';
import ListOption from './ListOption';

/** utils */
import { messengerMessage } from '@module-messenger/utils/messages';

/** styles */
import useStyles from './styles';

/** types */
import type { MenuBaseProps } from '@module-base/models';

const ButtonSetting = React.memo(() => {
    const classes = useStyles();
    const tooltipProps = React.useRef<MenuBaseProps['tooltipProps']>({
        title: <FormattedMessage {...messengerMessage['module.messenger.component.message.option.tooltip']} />,
        placement: 'top',
        children: <MenuIcon color="primary" />,
    }).current;

    const iconButtonProps = React.useRef<MenuBaseProps['iconButtonProps']>({
        className: classes.button,
    }).current;

    const menuProps = React.useRef<MenuBaseProps['menuProps']>({
        children: <ListOption />,
        className: classes.menuPaper,
    }).current;

    return <MenuBase tooltipProps={tooltipProps} iconButtonProps={iconButtonProps} menuProps={menuProps} />;
});

ButtonSetting.displayName = 'ButtonSetting';
export default ButtonSetting;
