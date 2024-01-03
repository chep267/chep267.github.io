/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import * as React from 'react';

/** lib components */
import { CircularProgress, Collapse, Divider, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { ExpandLess as ExpandLessIcon, ExpandMore as ExpandMoreIcon } from '@mui/icons-material';

/** styles */
import useStyles from './styles';

/** types */
import type { ElementClickEvent, NestedItemProps } from '@module-base/models';

export default function NestedItem(props: NestedItemProps) {
    const { subIndex = 1, divide, loading, onClick, title, icon = ' ', subMenu } = props;
    const classes = useStyles();
    const hasSub = (subMenu?.length || 0) > 0;

    const [open, setOpen] = React.useState(false);

    const toggleOpen = React.useCallback((event: ElementClickEvent<HTMLDivElement>) => {
        if (!hasSub) {
            return onClick?.(event);
        }
        return setOpen((prev) => {
            onClick?.(event, !prev);
            return !prev;
        });
    }, []);

    const styleIcon = React.useMemo(() => ({ marginLeft: subIndex * 16 }), [subIndex]);

    const renderCollapseList = React.useMemo(() => {
        return (
            <List component="div" disablePadding>
                {subMenu?.map((value) => <NestedItem key={value.id} {...value} subIndex={subIndex + 1} />)}
            </List>
        );
    }, [subMenu]);

    return (
        <>
            {divide?.includes('top') ? <Divider /> : null}
            <ListItemButton onClick={toggleOpen}>
                <ListItemIcon style={styleIcon}>{icon}</ListItemIcon>
                {loading ? (
                    <CircularProgress size={26} className={classes.loadingIcon} />
                ) : (
                    <ListItemText primary={title} primaryTypographyProps={{ color: open ? 'primary' : undefined }} />
                )}
                {!hasSub ? null : open ? (
                    <ExpandLessIcon className={classes.menuIcon} color="primary" />
                ) : (
                    <ExpandMoreIcon className={classes.menuIcon} />
                )}
            </ListItemButton>
            {hasSub ? (
                <Collapse in={open} timeout="auto" unmountOnExit>
                    {renderCollapseList}
                </Collapse>
            ) : null}
            {divide?.includes('bottom') ? <Divider /> : null}
        </>
    );
}
