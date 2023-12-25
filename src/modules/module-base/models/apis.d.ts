/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

type TypeCallApiDebounce = { timer?: number };

type TypeCallApiPayloadType<Data = unknown> = TypeCallApiDebounce & Data;

export type { TypeCallApiPayloadType };
