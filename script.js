window.onload = function () {
    // Adiciona um ouvinte de evento para verificar quando o usuário rolar a página
    window.onscroll = function () {
        scrollFunction();
    };
};

// Função para verificar a posição de rolagem e mostrar ou ocultar o botão
function scrollFunction() {
    var scrollTopBtn = document.getElementById("scrollTopBtn");
    
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
}

// Função para levar o usuário de volta ao topo quando o botão for clicado
function scrollTopFunction() {
    document.body.scrollTop = 0; // Para navegadores da web
    document.documentElement.scrollTop = 0; // Para IE/Edge
}