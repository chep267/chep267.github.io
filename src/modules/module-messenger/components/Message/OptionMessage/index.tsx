/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import * as React from 'react';

/** lib components */
import { FormattedMessage } from 'react-intl';

/** icons */
import { MoreHoriz as MoreHorizIcon } from '@mui/icons-material';

/** components */
import { MenuBase } from '@module-base/components';
import ListOption from './ListOption';

/** utils */
import { messengerMessage } from '@module-messenger/utils';

/** types */
import type { MenuBaseProps } from '@module-base/models';

const OptionMessage = React.memo(() => {
    const tooltipProps = React.useRef<MenuBaseProps['tooltipProps']>({
        title: <FormattedMessage {...messengerMessage['module.messenger.component.message.option.tooltip']} />,
        placement: 'top',
        children: <MoreHorizIcon color="primary" />,
    }).current;

    const iconButtonProps = React.useRef<MenuBaseProps['iconButtonProps']>({
        className: 'button-option-message',
    }).current;

    const menuProps = React.useRef<MenuBaseProps['menuProps']>({
        children: <ListOption />,
    }).current;

    return <MenuBase tooltipProps={tooltipProps} iconButtonProps={iconButtonProps} menuProps={menuProps} />;
});

OptionMessage.displayName = 'OptionMessage';
export default OptionMessage;
