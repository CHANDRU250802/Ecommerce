document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password === confirmPassword) {
        // Simple validation (replace with actual signup logic)
        localStorage.setItem('userEmail', email);
        window.location.href = "profile.html";  // Redirect to profile page
    } else {
        alert('Passwords do not match');
    }
});
