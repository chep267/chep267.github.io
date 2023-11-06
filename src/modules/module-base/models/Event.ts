/**
 *
 * @author dong.nguyenthanh@powergatesoftware.com on 26/07/2023.
 *
 */

/** types */
import type { ChangeEvent, MouseEvent } from 'react';

type InputChangeEvent = ChangeEvent<HTMLInputElement>;

type ElementClickEvent<T> = MouseEvent<T>;

export type { InputChangeEvent, ElementClickEvent };
