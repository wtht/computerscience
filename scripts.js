// JavaScript to show the footer when scrolling to the bottom
window.addEventListener('scroll', () => {
    const footer = document.querySelector('footer');
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        footer.classList.add('visible');
    } else {
        footer.classList.remove('visible');
    }
});
