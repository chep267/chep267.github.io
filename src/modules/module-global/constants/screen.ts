/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

const SCREEN = Object.freeze({
    HOME: '/',
    FEED: '/feed',

    MESSENGER: '/messenger',
    MESSENGER_CONVERSATION: '/t/:tid',

    CALENDAR: '/calendar',
    CALENDAR_INFO: '/info',

    GAME: '/game',
    GAME_POKEMON: '/pokemon',

    PROFILE: '/profile',
});

const SCREEN_SIZE = Object.freeze({
    HEADER_HEIGHT: 60,
    HEADER_PADDING: 20,
    APP_BAR_MIN_WIDTH: 65,
    APP_BAR_MAX_WIDTH: 266,
    AUTH_FORM_MIN_WIDTH: 480,
    AUTH_FORM_MAX_WIDTH: 700,

    MESSENGER_LEFT_RIGHT_MIN_WIDTH: 100,
    MESSENGER_LEFT_MIN_WIDTH: 100,
    MESSENGER_LEFT_MEDIUM_WIDTH: 280,
    MESSENGER_LEFT_RIGHT_MAX_WIDTH: 360,
});

export { SCREEN, SCREEN_SIZE };
