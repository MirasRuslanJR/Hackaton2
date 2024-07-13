document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const cartForm = this.nextElementSibling;
            cartForm.classList.toggle('show-cart-form');
        });
    });
});

window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    const scrollPosition = window.scrollY;

    if (scrollPosition > 0) {
        header.classList.add('scroll');
    } else {
        header.classList.remove('scroll');
    }
});