/**
 *
 * @author dong.nguyenthanh@powergatesoftware.com on 26/07/2023.
 *
 */

/** constants */
import { genApiPath } from '@module-base/utils/helpers/genApiPath';

const GLOBAL_API_PATH = Object.freeze({
    CONTROL_DASHBOARD: (arrPath?: Array<string | number>) => genApiPath('dashboard', arrPath),
    CONTROL_REPORT: (arrPath?: Array<string | number>) => genApiPath('report', arrPath),
    DATA_SOURCING: (arrPath?: Array<string | number>) => genApiPath('source', arrPath),
    METRIC: (arrPath?: Array<string | number>) => genApiPath('metric', arrPath),
    METRIC_STAKEHOLDER: (arrPath?: Array<string | number>) => genApiPath('stakeholder', arrPath),
    METRIC_VALUE: (arrPath?: Array<string | number>) => genApiPath('value', arrPath),
    ATTACHMENT: (arrPath?: Array<string | number>) => genApiPath('file', arrPath),
    RULE_AND_SETTING: (arrPath?: Array<string | number>) => genApiPath('rules/setting', arrPath),
});

export { GLOBAL_API_PATH };
