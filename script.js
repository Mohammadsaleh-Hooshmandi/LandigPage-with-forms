$(document).ready(() => {
    const loginCloseBtn = $(".login-close-btn");
    const signupCloseBtn = $(".signup-close-btn");
    const loginBtn = $(".login-btn");
    const signupBtn = $(".signup-btn")
    const loginForm = $(".login-form");
    const signupForm = $(".signup-form");

    loginCloseBtn.click(() => { loginForm.fadeOut(100) })
    signupCloseBtn.click(() => { signupForm.fadeOut(100) })

    loginBtn.click(() => { loginForm.fadeIn(100) })
    signupBtn.click(() => { signupForm.fadeIn(100) })
});