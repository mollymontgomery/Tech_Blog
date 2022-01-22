async function newFormHandler(event) {
    event.preventDefault();

    const title = document.querySelector('#post-title');
    const body = document.querySelector('#post-url');

    if (title && body) {
        const response = await fetch('/api/posts', {
            method: 'post',
            body: JSON.stringify({
                title: title.value,
                post_url: body.value
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

document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);