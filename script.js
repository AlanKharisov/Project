document.addEventListener('DOMContentLoaded', function() {
    const background = document.querySelector('.background');
    const screens = document.querySelectorAll('.screen');
    const splashScreen = document.querySelector('.splash-screen');
    const welcomeScreen = document.querySelector('.welcome-screen');
    const authScreen = document.querySelector('.auth-screen');
    const nextBtn = document.querySelector('.next-btn');
    const signupForm = document.querySelector('.signup-form');
    const loginForm = document.querySelector('.login-form');
    const forgotPassword = document.querySelector('.forgot-password');

    setTimeout(() => {
        splashScreen.classList.remove('active');
        welcomeScreen.classList.add('active');
        background.style.backgroundPosition = 'center right';
    }, 3000);

    nextBtn.addEventListener('click', () => {
        welcomeScreen.classList.remove('active');
        authScreen.classList.add('active');
        signupForm.classList.add('active');
        background.style.backgroundPosition = 'right';
    });

    document.querySelector('.signup-form form').addEventListener('submit', function(e) {
        e.preventDefault();
        signupForm.classList.remove('active');
        loginForm.classList.add('active');
    });

    document.querySelector('.login-form form').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Logged in successfully!');
    });

    forgotPassword.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Password reset link will be sent to your email!');
    });
});
