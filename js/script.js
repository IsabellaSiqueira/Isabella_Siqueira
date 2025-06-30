// js/script.js (parte do menu mobile)

// Seleciona o botão de toggle do menu mobile
const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
// Seleciona o próprio cabeçalho (pois vamos adicionar a classe 'menu-open' a ele)
const headerElement = document.querySelector('header');
// Seleciona todos os links dentro do menu principal (para fechar o menu ao clicar)
const menuLinks = document.querySelectorAll('#main-menu a');


// Verifica se o botão de toggle existe
if (mobileMenuToggle && headerElement) {
    mobileMenuToggle.addEventListener('click', () => {
        // Alterna a classe 'menu-open' no elemento <header>
        headerElement.classList.toggle('menu-open');
    });
} else {
    console.warn("Elemento '#mobile-menu-toggle' ou '<header>' não encontrado para o menu mobile.");
}

// Fecha o menu mobile quando um link é clicado (para melhorar a UX)
if (menuLinks.length > 0 && headerElement) {
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (headerElement.classList.contains('menu-open')) {
                headerElement.classList.remove('menu-open');
            }
        });
    });
}