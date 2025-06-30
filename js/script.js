// js/script.js

// Seleciona o elemento do link <a> dentro da div.seta
// É importante selecionar o <a> porque é ele que o usuário vai clicar
const setaLink = document.querySelector('.seta a');

// Seleciona a seção para onde queremos rolar
const sobreMimSection = document.querySelector('#sobreMim');

// Verifica se os elementos foram encontrados antes de adicionar o event listener
if (setaLink && sobreMimSection) {
    // Adiciona um "ouvinte de evento" para o clique no link da seta
    setaLink.addEventListener('click', (event) => {
        // Previne o comportamento padrão do link (que seria um salto instantâneo)
        event.preventDefault();

        // Rola a página suavemente para a seção "Sobre Mim"
        sobreMimSection.scrollIntoView({
            behavior: 'smooth' // Faz a rolagem ser suave
        });
    });
} else {
    console.warn("Elemento '.seta a' ou '#sobreMim' não encontrado. Verifique os seletores no script.js e o HTML.");
}