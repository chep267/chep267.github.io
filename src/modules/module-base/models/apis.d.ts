/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

export type TypeCallApiDebounce = { timer?: number };

export type TypeCallApiPayload<Data = unknown> = TypeCallApiDebounce & Data;
