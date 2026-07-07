document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('loginForm');
    const emailInput = document.getElementById('userEmail');
    const passwordInput = document.getElementById('userPassword');
    const togglePasswordBtn = document.getElementById('togglePassword');
    const toggleIcon = togglePasswordBtn.querySelector('i');

    togglePasswordBtn.addEventListener('click', function () {
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            toggleIcon.classList.remove('fa-eye');
            toggleIcon.classList.add('fa-eye-slash');
        } else {
            passwordInput.type = 'password';
            toggleIcon.classList.remove('fa-eye-slash');
            toggleIcon.classList.add('fa-eye');
        }
    });

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        if (!form.checkValidity()) {
            form.classList.add('was-validated');
            return;
        }

        const enteredEmail = emailInput.value.trim();
        const enteredPassword = passwordInput.value.trim();

        if (enteredEmail === 'alpina@gmail.com' && enteredPassword === '123456') {
            sessionStorage.setItem('alpinaAdminLoggedIn', 'true');
            localStorage.setItem('alpinaAdminLoggedIn', 'true');
            window.location.href = 'panel.html';
        } else {
            alert('Usuario o contraseña incorrectos.');
            form.classList.add('was-validated');
        }
    }, false);
});
