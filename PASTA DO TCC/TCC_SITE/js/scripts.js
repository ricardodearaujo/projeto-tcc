// Seleção de elementos
const menuBtn = document.querySelector("#menu"); // Seleciona o botão do menu
const closeMenuBtn = document.querySelector("#close-menu"); // Seleciona o botão de fechar o menu
const menu = document.querySelector("#mobile-navbar"); // Seleciona o menu mobile

const desktopLinks = document.querySelectorAll("#navbar a"); // Seleciona os links do menu desktop
const mobileLinks = document.querySelectorAll("#mobile-navbar a"); // Seleciona os links do menu mobile
const allLinks = [...desktopLinks, ...mobileLinks]; // Combina todos os links em um único array

const slides = document.querySelectorAll(".banner"); // Seleciona todos os slides
const dots = document.querySelectorAll(".dot"); // Seleciona todos os pontos de navegação dos slides
let slideIndex = 0; // Inicializa o índice do slide atual como 0

// Função para rolar suavemente para a seção ao clicar em um link
function smoothScroll(e) {
  e.preventDefault(); // Previne o comportamento padrão do link

  const href = this.getAttribute("href"); // Obtém o atributo href do link clicado
  const offsetTop = document.querySelector(href).offsetTop; // Obtém a posição do topo da seção associada ao link clicado

  // Rola suavemente para a seção correspondente
  scroll({
    top: offsetTop,
    behavior: "smooth",
  });

  // Fecha o menu móvel após um breve atraso
  setTimeout(() => {
    if (menu.classList.contains("menu-active")) {
      menu.classList.remove("menu-active");
    }
  }, 500);
}

// Função para exibir os slides de forma automática
function showSlides() {
  // Remove a classe 'active' de todos os slides e pontos de navegação
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
    dots[i].classList.remove("active");
  }

  slideIndex++; // Incrementa o índice do slide atual

  // Se o índice do slide atual ultrapassar o número total de slides, redefine-o como 1
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  // Adiciona a classe 'active' ao slide e ponto de navegação correspondente
  slides[slideIndex - 1].classList.add("active");
  dots[slideIndex - 1].classList.add("active");

  // Chama recursivamente a função showSlides após 3 segundos (3000 milissegundos)
  setTimeout(showSlides, 3000);
}

// Eventos
// Adiciona eventos de clique aos botões de menu e links de navegação para rolagem suave
[menuBtn, closeMenuBtn].forEach((btn) => {
  btn.addEventListener("click", (e) => {
    menu.classList.toggle("menu-active");
  });
});

allLinks.forEach((link) => {
  link.addEventListener("click", smoothScroll);
});

// Inicialização
showSlides(); // Chama a função showSlides para iniciar a exibição automática dos slides


