/**
 *
 * @author dongntd267@gmail.com on 24/08/2023.
 *
 */

import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles({
    thread_content: {
        display: 'flex',
        justifyContent: 'flex-end',
        position: 'relative',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        '& > div[class*="messenger_left_thread_list_default"]': {
            position: 'absolute',
            zIndex: 1,
            top: 0,
            right: 0,
            transition: 'right 0.3s',
        },
        '& > div[class*="messenger_left_thread_list_search"]': {
            position: 'absolute',
            zIndex: 1,
            top: 0,
            left: '100%',
            transition: 'left 0.3s',
        },
    },
    thread_content_focus_search: {
        '& > div[class*="messenger_left_thread_list_default"]': {
            right: '100%',
        },
        '& > div[class*="messenger_left_thread_list_search"]': {
            left: 0,
        },
    },

    thread_content1: {
        display: 'flex',
        justifyContent: 'flex-end',
        position: 'relative',
        width: '100%',
        height: '100%',
        '& > ul[class*="messenger_left_thread_list_default"]': {
            transition: 'width 0.8s, visibility 0.8s',
        },
        '& > ul[class*="messenger_left_thread_list_search"]': {
            transition: 'width 0.6s, visibility 0.6s',
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            width: 0,
            visibility: 'hidden',
        },
    },
    thread_content_focus_search1: {
        '& > ul[class*="messenger_left_thread_list_default"]': {
            transition: 'width 0.6s, visibility 0.6s',
            width: 0,
            visibility: 'hidden',
        },
        '& > ul[class*="messenger_left_thread_list_search"]': {
            transition: 'width 0.8s, visibility 0.8s',
            width: '100%',
            visibility: 'visible',
        },
    },
});

export default useStyles;
