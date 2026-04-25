document.addEventListener("DOMContentLoaded", function () {
    // Wait for page to load completely
    document.addEventListener('DOMContentLoaded', function () {

        // 1. Get login form
        const loginForm = document.getElementById('loginform');

        // 2. Listen for form submission event
        loginForm.addEventListener('submit', function (e) {
            // Prevent form from refreshing automatically
            e.preventDefault();

            // 3. Get username and password entered by user
            const username = document.getElementById('username').value.trim();
            const password = document.getElementById('password').value.trim();

            // 4. Verify that inputs are not empty
            if (username === '' || password === '') {
                alert('Please enter username and password!');
                return;
            }

            // =============================================
            // 5. Simulate login verification (connect to database in actual project)
            // =============================================
            if (username === 'admin' && password === '123456') {
                alert('Login successful!');
                // Login successful, redirect to homepage
                window.location.href = 'f1 homepage.html';
            } else {
                alert('Username or password is wrong!');
            }
        });
    });
});