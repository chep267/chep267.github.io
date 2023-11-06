/**
 *
 * @author dong.nguyenthanh@powergatesoftware.com on 26/07/2023.
 *
 */

export const EN = Object.freeze({
    // title
    'module.auth.form.title.signin': 'Sign in',
    'module.auth.form.title.register': 'Register',
    'module.auth.form.title.recover': 'Recover',
    'module.auth.form.title.verifyOTP': 'Verify code',
    'module.auth.form.title.signout': 'Sign out',

    // label
    'module.auth.form.input.label.email': 'Email',
    'module.auth.form.input.label.password': 'Password',
    'module.auth.form.input.label.password-hill': 'Re-enter the password',

    // submit
    'module.auth.form.button.submit.signin': 'Signin',
    'module.auth.form.button.submit.register': 'Register',
    'module.auth.form.button.submit.recover': 'Confirm',

    // status
    'module.auth.form.status.server.busy': 'The server is currently not responding. Please try again in a few minutes!',
    'module.auth.form.status.email.incorrect': 'Email or password is incorrect!',
    'module.auth.form.status.password.incorrect': 'Email or password is incorrect!',
    'module.auth.form.status.register.success': 'Account registration successful!',
    'module.auth.form.status.register.exist': 'This email has been registered. Please try again!',
    'module.auth.form.status.register.fail': 'Account registration failed. Please try again!',
    'module.auth.form.status.recover.success': 'A password reset email has been sent to your inbox!',
    'module.auth.form.status.recover.fail': 'This email has not been registered!',

    // fix
    'module.auth.sign.out': 'Exit',

    'module.auth.form.label.verifyOTP': 'Enter OTP we just sent to "{phoneNumber}"',
    'module.auth.form.label.forgotPass':
        'Enter the email you signed up with and we will send you an email with instructions to reset your password.',

    'module.auth.form.label.navigate.signin': 'Remember password?',
    'module.auth.form.label.resendCode': 'Didn’t receive the verification OTP?',

    'module.auth.form.button.submit.forgotPass': 'Ok',
    'module.auth.form.button.submit.resetPass': 'Reset',
    'module.auth.form.button.resendOTP': 'Resend again?',

    'module.auth.form.navigate.signin': 'Sign in',
    'module.auth.form.navigate.forgotPass': 'Reset password',

    'module.auth.form.status.server.error': 'The system in not available. Please try again later.',
    'module.auth.form.status.email.empty': 'Please enter your email address!',
    'module.auth.form.status.password.empty': 'Please enter your password!',
    'module.auth.form.status.email.invalid': 'Incorrect email address!',
    'module.auth.form.status.password.invalid':
        '8 characters minimum, 1 lower case, 1 upper case, 1 number, 1 special character!',
    'module.auth.form.status.password.different': 'Your passwords do not match!',
    'module.auth.form.status.email.unregistered': 'Email is not registered!',
    'module.auth.form.status.password.sendReset': 'The password reset link has been sent to your email!',
    'module.auth.form.status.password.reset.success': 'Your password has been reset successfully!',
    'module.auth.form.status.opt.incorrect': 'OTP code is incorrect. Please try again!',
});
