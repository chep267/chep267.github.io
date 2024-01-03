/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

/** types */
import type { ChangeEvent, MouseEvent, KeyboardEvent, ComponentType } from 'react';

type InputChangeEvent = ChangeEvent<HTMLInputElement>;

type ElementClickEvent<T> = MouseEvent<T>;

export type { InputChangeEvent, ElementClickEvent, KeyboardEvent, ComponentType };
