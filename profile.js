document.addEventListener('DOMContentLoaded', function() {
    const userEmail = localStorage.getItem('userEmail');
    if (userEmail) {
        document.getElementById('userEmail').textContent = userEmail;
        document.getElementById('profileLink').style.display = 'inline-block';
        document.getElementById('loginLink').style.display = 'none';
        document.getElementById('signupLink').style.display = 'none';
    } else {
        window.location.href = 'login.html';  // Redirect to login page if not logged in
    }

    document.getElementById('logoutButton').addEventListener('click', function() {
        localStorage.removeItem('userEmail');
        window.location.href = 'login.html';  // Redirect to login page after logout
    });
});
