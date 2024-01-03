/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

/** types */
import type { ChangeEvent, MouseEvent } from 'react';

export type { KeyboardEvent, ComponentType, ReactEventHandler } from 'react';

export type InputChangeEvent = ChangeEvent<HTMLInputElement>;

export type ElementClickEvent<T> = MouseEvent<T>;
