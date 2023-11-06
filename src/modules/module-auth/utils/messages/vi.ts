/**
 *
 * @author dong.nguyenthanh@powergatesoftware.com on 26/07/2023.
 *
 */

export const VI = Object.freeze({
    // title
    'module.auth.form.title.signin': 'Đăng nhập',
    'module.auth.form.title.register': 'Đăng kí',
    'module.auth.form.title.recover': 'Quên mật khẩu',
    'module.auth.form.title.verifyOTP': 'Mã xác thực',
    'module.auth.form.title.signout': 'Đăng xuất',

    // label
    'module.auth.form.input.label.email': 'Email',
    'module.auth.form.input.label.password': 'Mật khẩu',
    'module.auth.form.input.label.password-hill': 'Nhập lại mật khẩu',

    // submit
    'module.auth.form.button.submit.signin': 'Đăng nhập',
    'module.auth.form.button.submit.register': 'Đăng kí',
    'module.auth.form.button.submit.recover': 'Xác nhận',

    // status
    'module.auth.form.status.server.busy': 'Máy chủ hiện không phản hồi. Xin hãy thử lại sau ít phút!',
    'module.auth.form.status.email.incorrect': 'Email hoặc mật khẩu không chính xác!',
    'module.auth.form.status.password.incorrect': 'Email hoặc mật khẩu không chính xác!',
    'module.auth.form.status.register.success': 'Đăng kí tài khoản thành công!',
    'module.auth.form.status.register.exist': 'Email này đã được đăng kí. Xin hãy thử lại!',
    'module.auth.form.status.register.fail': 'Đăng kí tài khoản thất bại. Xin hãy thử lại!',
    'module.auth.form.status.recover.success': 'Một email đặt lại mật khẩu đã được gửi đến hòm thư của bạn!',
    'module.auth.form.status.recover.fail': 'Email này chưa được đăng kí!',

    // fix
    'module.auth.sign.out': 'Đăng xuất',

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

    'module.auth.form.status.server.error': 'Máy chủ hiện không phản hồi. Xin hãy thử lại sau ít phút!',
    'module.auth.form.status.email.empty': 'Email không được để trống!',
    'module.auth.form.status.password.empty': 'Mật khẩu không được để trống!',
    'module.auth.form.status.email.invalid': 'Email không đúng định dạng!',
    'module.auth.form.status.password.invalid':
        'Mật khẩu tối thiểu 8 kí tự, bao gồm ít nhất 1 chữ thường, 1 chữ in hoa, 1 chữ số, 1 kí tự đặc biệt!',
    'module.auth.form.status.password.different': 'Your passwords do not match!',

    'module.auth.form.status.email.unregistered': 'Email is not registered!',
    'module.auth.form.status.password.sendReset': 'The password reset link has been sent to your email!',
    'module.auth.form.status.password.reset.success': 'Your password has been reset successfully!',
    'module.auth.form.status.opt.incorrect': 'OTP code is incorrect. Please try again!',
});
