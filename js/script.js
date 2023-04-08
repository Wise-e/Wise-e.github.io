const menuBtn = document.getElementById('menu-btn');
const menu = document.querySelector('.menu');

// Afficher/cacher le menu responsive
menuBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
});

// Récupérer les projets depuis l'API et les afficher sur la page
const projectsList = document.querySelector('#projects ul');

fetch('https://api.github.com/users/Wise-e/repos')
    .then(response => response.json())
    .then(projects => {
        projects.forEach(project => {
            const li = document.createElement('li');
            const link = document.createElement('a');
            link.href = project.html_url;
            link.target = '_blank';
            link.textContent = project.name;
            li.appendChild(link);
            projectsList.appendChild(li);
        });
    })
    .catch(error => {
        console.log(error);
    });