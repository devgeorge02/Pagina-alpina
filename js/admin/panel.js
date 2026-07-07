// Script principal del panel de administración.
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('[data-logout]').forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            sessionStorage.removeItem('alpinaAdminLoggedIn');
            localStorage.removeItem('alpinaAdminLoggedIn');
            window.location.href = 'login.html';
        });
    });
});
