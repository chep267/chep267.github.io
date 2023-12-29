/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

export const emptyFunction = Object.freeze(() => {});

export const emptyObject = Object.freeze<Record<any, any>>({});

export const emptyArray = Object.freeze([]) as [];

export const TIMING_SEARCHING = 300;

export const TIMING_API_PENDING = 600;

export const TIMING_APP_START = 1000;

export const TIMING_NOTIFY_DURATION = 2000;

export const SECOND_COUNT_DOWN_ERROR = 99;
