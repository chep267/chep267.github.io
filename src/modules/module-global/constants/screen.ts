/**
 *
 * @author dong.nguyenthanh@powergatesoftware.com on 26/07/2023.
 *
 */

const SCREEN = Object.freeze({
    HOME: '/',
    FEED: '/feed',
    MESSENGER: '/messenger',
    PROFILE: '/profile',

    ACCOUNT_MANAGEMENT: '/account-management',
    NEW_ACCOUNT: '/account-management/add-account',
    EDIT_ACCOUNT: '/account-management/edit-account/:userId',
});

const SCREEN_SIZE = Object.freeze({
    HEADER_HEIGHT: 60,
    HEADER_PADDING: 20,
    APP_BAR_MIN_WIDTH: 65,
    APP_BAR_MAX_WIDTH: 266,
    AUTH_FORM_MIN_WIDTH: 480,
    AUTH_FORM_MAX_WIDTH: 700,

    MESSENGER_LEFT_RIGHT_MIN_WIDTH: 100,
    MESSENGER_LEFT_RIGHT_MAX_WIDTH: 360,
});

export { SCREEN, SCREEN_SIZE };
