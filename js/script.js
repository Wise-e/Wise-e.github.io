// Fonction pour afficher ou cacher le menu de navigation sur mobile
function toggleMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('show-menu');
}

// Événement pour afficher ou cacher le menu de navigation sur mobile
const menuBtn = document.querySelector('#menu-btn');
menuBtn.addEventListener('click', toggleMenu);

// Fonction pour changer le texte du bouton du hero lorsqu'on clique dessus
function changeButtonText() {
    const btn = document.querySelector('#hero button');
    btn.textContent = 'Bientôt disponible';
}

// Événement pour changer le texte du bouton du hero lorsqu'on clique dessus
const heroBtn = document.querySelector('#hero button');
heroBtn.addEventListener('click', changeButtonText);

// Tableau des projets avec leurs informations
const projects = [
    {
        name: 'Projet 1',
        image: 'img/project1.jpg',
        description: 'Description du projet 1.',
        link: 'https://example.com/project1'
    },
    {
        name: 'Projet 2',
        image: 'img/project2.jpg',
        description: 'Description du projet 2.',
        link: 'https://example.com/project2'
    },
    {
        name: 'Projet 3',
        image: 'img/project3.jpg',
        description: 'Description du projet 3.',
        link: 'https://example.com/project3'
    }
];

// Fonction pour générer la liste des projets
function generateProjectList() {
    const projectList = document.querySelector('#projects ul');
    projectList.innerHTML = '';

    projects.forEach(project => {
        const listItem = document.createElement('li');
        const image = document.createElement('img');
        const name = document.createElement('h3');
        const description = document.createElement('p');
        const link = document.createElement('a');

        image.src = project.image;
        image.alt = project.name;
        name.textContent = project.name;
        description.textContent = project.description;
        link.textContent = 'En savoir plus';
        link.href = project.link;

        listItem.appendChild(image);
        listItem.appendChild(name);
        listItem.appendChild(description);
        listItem.appendChild(link);
        projectList.appendChild(listItem);
    });
}

// Générer la liste des projets au chargement de la page
generateProjectList();
