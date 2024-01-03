/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import * as React from 'react';
import classnames from 'classnames';

/** lib components */
import { ListItem, ListItemText, ListItemAvatar, IconButton, Tooltip } from '@mui/material';
import { MoreHoriz as MoreHorizIcon } from '@mui/icons-material';

/** components */
import ThreadAvatar from '@module-messenger/components/ThreadAvatar';
import ThreadName from '@module-messenger/components/ThreadName';
import ThreadLastMessage from '@module-messenger/components/ThreadLastMessage';

/** constants */
import { emptyObject } from '@module-base/constants';

/** styles */
import useStyles from './styles';

/** types */
import { TypeDocumentThreadData } from '@module-messenger/models';

type ThreadItemProps = { item?: TypeDocumentThreadData; isSelected: boolean; onClick(): void; isTooltip?: boolean };

const ThreadItem = React.memo(
    (props: ThreadItemProps) => {
        const { item = emptyObject, isSelected, isTooltip, onClick } = props;
        const classes = useStyles();

        const stopPropagation = React.useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
            event.stopPropagation();
        }, []);

        const renderName = React.useMemo(() => {
            return <ThreadName tid={item.tid} variant="h6" />;
        }, [item.tid]);

        const renderItem = React.useMemo(() => {
            return (
                <>
                    <ListItemAvatar>
                        <ThreadAvatar tid={item.tid} />
                    </ListItemAvatar>
                    <ListItemText
                        primary={renderName}
                        secondary={<ThreadLastMessage tid={item.tid} message={item.lastMessage} />}
                        secondaryTypographyProps={{ component: 'div' }}
                    />
                    <IconButton className={classes.itemOption} onClick={stopPropagation}>
                        <MoreHorizIcon color="primary" />
                    </IconButton>
                </>
            );
        }, []);

        return (
            <Tooltip title={renderName} placement="right" disableHoverListener={!isTooltip}>
                <ListItem
                    className={classnames('.ThreadItem', classes.listItem, {
                        [classes.listItemSelected]: isSelected,
                    })}
                    onClick={onClick}>
                    {renderItem}
                </ListItem>
            </Tooltip>
        );
    },
    (prevProps, nextProps) =>
        prevProps.isSelected === nextProps.isSelected &&
        prevProps.item === nextProps.item &&
        prevProps.isTooltip === nextProps.isTooltip
);

ThreadItem.displayName = 'ThreadItem';
export default ThreadItem;
