/**
 *
 * @author dong.nguyenthanh@powergatesoftware.com on 26/07/2023.
 *
 */

/** utils */
import { createMessageIntl } from '@module-base/utils/helpers/createIntl';
import { VI } from './vi';
import { EN } from './en';

const feedMessage = createMessageIntl(VI);

export { VI, EN, feedMessage };