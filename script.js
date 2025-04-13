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

    // Show splash screen for 3 seconds
    setTimeout(() => {
        splashScreen.classList.remove('active');
        welcomeScreen.classList.add('active');
        background.style.backgroundPosition = 'center right';
    }, 3000);

    // Next button click handler
    nextBtn.addEventListener('click', () => {
        welcomeScreen.classList.remove('active');
        authScreen.classList.add('active');
        loginForm.classList.add('active');
        signupForm.classList.remove('active');
        background.style.backgroundPosition = 'right';
    });

    // Forgot password button
    forgotPassword.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Password reset link will be sent to your email!');
    });

    // Form submissions
    document.querySelectorAll('form').forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (this.closest('.signup-form')) {
                // After sign up, show sign in form
                signupForm.classList.remove('active');
                loginForm.classList.add('active');
            } else {
                // Sign in form submission
                alert('Logged in successfully!');
            }
        });
    });
});