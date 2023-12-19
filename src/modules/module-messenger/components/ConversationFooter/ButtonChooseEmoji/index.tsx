/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import * as React from 'react';

/** lib components */
import { IconButton, Popover, Tooltip } from '@mui/material';
import { EmojiEmotions as EmojiEmotionsIcon } from '@mui/icons-material';

/** components */
import EmojiPicker from '@module-messenger/components/EmojiPicker';

/** styles */
import useStyles from './styles';

/** types */
import type { ElementClickEvent } from '@module-base/models';

export default function ButtonChooseEmoji() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

    const openMenu = React.useCallback((event: ElementClickEvent<HTMLButtonElement>) => setAnchorEl(event.currentTarget), []);

    const closeMenu = React.useCallback(() => setAnchorEl(null), []);

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <>
            <Tooltip title={'cx'}>
                <IconButton aria-describedby={id} onClick={openMenu}>
                    <EmojiEmotionsIcon color="primary" />
                </IconButton>
            </Tooltip>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={closeMenu}
                className={classes.menuPaper}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}>
                <EmojiPicker />
            </Popover>
        </>
    );
}
