/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import * as React from 'react';
import classnames from 'classnames';

/** lib components */
import { Tooltip, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

/** styles */
import useStyles from './styles';

/** types */
import { ReactNode } from 'react';

type AppItemProps = {
    path: string;
    name: ReactNode;
    icon: ReactNode;
    isSelected: boolean;
    onClick(): void;
};

const AppItem = React.memo(
    (props: Omit<AppItemProps, 'path'>) => {
        const { name, icon, isSelected, onClick } = props;
        const classes = useStyles();

        const renderItem = React.useMemo(() => {
            return (
                <Tooltip title={name} placement="right">
                    <ListItemButton onClick={onClick}>
                        <ListItemIcon>{icon}</ListItemIcon>
                        <ListItemText primary={name} />
                    </ListItemButton>
                </Tooltip>
            );
        }, []);

        return (
            <ListItem className={classnames(classes.listItem, { [classes.listItemSelected]: isSelected })}>
                {renderItem}
            </ListItem>
        );
    },
    (prevProps, nextProps) => prevProps.isSelected === nextProps.isSelected
);

AppItem.displayName = 'AppItem';
export default AppItem;
