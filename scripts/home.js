function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function animateOnScroll() {
    animateSection('.news');
    animateSection('.achievements');
    animateSection('.achievements-news');
    animateSection('.shop');
    animateSection('.about');
    animateSection('.app');
    animateSection('.game');
}

function animateSection(sectionSelector) {
    const section = document.querySelector(sectionSelector);
    if (!section) return;

    const elements = section.querySelectorAll('.animate-on-scroll');

    elements.forEach(element => {
        if (isInViewport(element)) {
            element.classList.add('animate');
        }
    });
}

window.addEventListener('scroll', animateOnScroll);

animateOnScroll();

function animateSection(sectionSelector) {
    const section = document.querySelector(sectionSelector);
    if (!section) return;

    const elements = section.querySelectorAll('.animate-on-scroll');

    elements.forEach(element => {
        if (isInViewport(element)) {
            if (!element.classList.contains('animate')) {
                element.classList.add('animate');
            }
        } else {
            element.classList.remove('animate');
        }
    });
}