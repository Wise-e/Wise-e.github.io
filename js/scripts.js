const darkModeToggle = document.querySelector('.dark-mode-toggle');


darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.head.classList.toggle('dark-mode');

});


