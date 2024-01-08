/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import * as yup from 'yup';

/** constants */
import { RegexPassword } from '@module-base/constants/regex';

/** utils */
import { authMessage } from '@module-auth/utils';

export const authFormSchema = yup
    .object({
        email: yup
            .string()
            .required(authMessage['module.auth.form.status.email.empty'].id)
            .email('module.auth.form.status.email.invalid'),
        password: yup
            .string()
            .required(authMessage['module.auth.form.status.password.empty'].id)
            .matches(RegexPassword, authMessage['module.auth.form.status.password.invalid'].id),
    })
    .required();
