/**
 *
 * @author dong.nguyenthanh@powergatesoftware.com on 26/07/2023.
 *
 */

const emptyFunction = Object.freeze(() => {});

const emptyObject = Object.freeze<Record<string, undefined>>({});

const emptyArray = Object.freeze([]) as [];

const TIMING_SEARCHING = 300;

const TIMING_API_PENDING = 600;

const TIMING_APP_START = 1000;

const TIMING_NOTIFY_DURATION = 2000;

const SECOND_COUNT_DOWN_ERROR = 99;

export {
    emptyFunction,
    emptyObject,
    emptyArray,
    TIMING_SEARCHING,
    TIMING_API_PENDING,
    TIMING_APP_START,
    TIMING_NOTIFY_DURATION,
    SECOND_COUNT_DOWN_ERROR,
};
