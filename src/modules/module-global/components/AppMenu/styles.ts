/**
 *
 * @author dongntd267@gmail.com on 24/08/2023.
 *
 */

import makeStyles from '@mui/styles/makeStyles';

/** constants */
import { SCREEN_SIZE } from '@module-global/constants/screen';

const useStyles = makeStyles(({ palette }) => ({
    drawer: {
        width: SCREEN_SIZE.APP_BAR_MIN_WIDTH,
        height: '100%',
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        transition: 'width 0.6s',
        '& .MuiDrawer-paper': {
            transition: 'width 0.6s',
            top: SCREEN_SIZE.HEADER_HEIGHT,
            '&:hover': {
                '&::-webkit-scrollbar-thumb': {
                    backgroundColor: palette.grey[500],
                },
            },
            '&::-webkit-scrollbar': {
                width: '7px',
                height: '7px',
            },
            '&::-webkit-scrollbar-track': {
                borderRadius: '10px',
                backgroundColor: 'transparent',
            },
            '&::-webkit-scrollbar-thumb': {
                borderRadius: '10px',
                backgroundColor: 'transparent',
            },
            '&::-webkit-scrollbar-thumb:active': {
                backgroundColor: palette.grey[500],
            },
        },
    },
    drawerOpen: {
        width: SCREEN_SIZE.APP_BAR_MAX_WIDTH,
        overflowX: 'hidden',
        '& .MuiDrawer-paper': {
            width: SCREEN_SIZE.APP_BAR_MAX_WIDTH,
            overflowX: 'hidden',
        },
    },
    drawerClose: {
        width: SCREEN_SIZE.APP_BAR_MIN_WIDTH,
        overflowX: 'hidden',
        '& .MuiDrawer-paper': {
            width: SCREEN_SIZE.APP_BAR_MIN_WIDTH,
            overflowX: 'hidden',
        },
    },

    menu: {
        width: '100%',
        '& .MuiListItemButton-root': {
            borderRadius: 8,
        },
    },
    menuItem: {
        width: '100%',
        '& .MuiListItemButton-root': {
            borderRadius: 8,
            minHeight: 50,
        },
    },
    menuItemClose: {
        width: '100%',
        paddingLeft: 6,
        paddingRight: 6,
        '& .MuiListItemText-root': {
            visibility: 'hidden',
        },
        '& .MuiListItemButton-root': {
            justifyContent: 'center',
            alignItems: 'center',
            '& .MuiListItemIcon-root': {
                minWidth: 'unset',
            },
        },
    },
    menuItemSelected: {
        '& .MuiListItemButton-root': {
            backgroundColor: palette.primary.dark,
            '& .MuiListItemText-root, .MuiSvgIcon-root': {
                color: palette.common.white,
            },
        },
    },
}));

export default useStyles;
