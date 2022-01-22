async function signupFormHandler(event) {
    event.preventDefault();

    const username = document.querySelector('#username-signup');
    const password = document.querySelector('#password-signup');

    if (username && password) {
        const response = await fetch('/api/users', {
            method: 'post',
            body: JSON.stringify({
                username: username.value,
                password: password.value
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }
}

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);