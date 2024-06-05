// scripts/main.js

document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.sidebar nav ul li a');
    const heroBtn = document.querySelector('.hero .btn');
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const sidebar = document.querySelector('.sidebar');

    const scrollToSection = (event) => {
        event.preventDefault();
        const targetId = event.target.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
        });

        // Fechar o menu lateral ao clicar em um link em telas menores
        if (window.innerWidth <= 768) {
            sidebar.classList.remove('active');
        }
    };

    links.forEach(link => {
        link.addEventListener('click', scrollToSection);
    });

    if (heroBtn) {
        heroBtn.addEventListener('click', scrollToSection);
    }

    hamburgerMenu.addEventListener('click', () => {
        sidebar.classList.toggle('active');
    });
});
