/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import * as React from 'react';

/** lib components */
import { FormattedMessage } from 'react-intl';
import { MenuItem } from '@mui/material';

/** utils */
import { messengerMessage } from '@module-messenger/utils';

/** styles */
import type { ElementClickEvent } from '@module-base/models';

/** types */
type MenuItemProps = {
    id: string;
    icon?: React.ReactNode;
    loading?: boolean;
    title?: React.ReactNode;
    divide?: boolean;
    subMenu?: MenuItemProps[];
    subIndex?: number;
    onClick?(event: ElementClickEvent<HTMLDivElement>, isExpand?: boolean): void;
};

export default function ListOption() {
    const menu = React.useRef<MenuItemProps[]>([
        {
            id: 'reply',
            title: <FormattedMessage {...messengerMessage['module.messenger.component.message.option.reply']} />,
            divide: true,
        },
        {
            id: 'forward',
            title: <FormattedMessage {...messengerMessage['module.messenger.component.message.option.forward']} />,
            divide: true,
        },
        {
            id: 'copy',
            title: <FormattedMessage {...messengerMessage['module.messenger.component.message.option.copy']} />,
            divide: true,
        },
        {
            id: 'revoke',
            title: <FormattedMessage {...messengerMessage['module.messenger.component.message.option.revoke']} />,
            divide: true,
        },
        {
            id: 'delete',
            title: <FormattedMessage {...messengerMessage['module.messenger.component.message.option.delete']} />,
            divide: true,
        },
    ]).current;

    const renderItem = (item: MenuItemProps) => {
        return <MenuItem key={item.id}>{item.title}</MenuItem>;
    };

    return <>{menu.map(renderItem)}</>;
}
