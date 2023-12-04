const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const password = e.target.querySelector('input').value;

    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username: "admin", password: password })
    })
        .then(res => {
            console.log(res.json.message);
            if (res.status == 200) return res.json();


            return alert('Wrong password');
        })
        .then(data => {
            if (data.status === 'success') {
                alert('You are logged in');
            }
        })
})