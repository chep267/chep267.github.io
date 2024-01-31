/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import { defineMessages } from 'react-intl';

/** utils */
import { createMessageIntl } from '@module-base/utils';
import { vi } from './vi.ts';
import { en } from './en.ts';

export const themeMessage = defineMessages(createMessageIntl(vi));
export { vi, en };
