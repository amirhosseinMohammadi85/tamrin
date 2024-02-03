document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let errorMessage = document.getElementById('error-message');

    if (username === '' || password === '') {
        errorMessage.textContent = 'Enter your password or username.';
    } else if (username !== 'my_username' || password !== 'my_password') {
        errorMessage.textContent = 'username or password is wrong.';
    } else {
        errorMessage.textContent = 'Login!';
    }
});
