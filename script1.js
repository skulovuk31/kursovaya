document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('input, textarea').forEach(element => {
        element.setAttribute('placeholder', ' ');
    });

    const form = document.getElementById('contactForm');
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        console.log('Отправка формы:', { name, email, message });
    });
});
