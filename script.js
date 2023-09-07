function mudarEstado() {
    var conteudo = document.getElementById("conteudo");
    var botao = document.getElementById("meuBotao");
    var gatinhoContainer = document.querySelector(".gatinho-container");
    var mensagem = document.getElementById("mensagem");

    if (conteudo.classList.contains("antesDoClique")) {
        conteudo.innerHTML = "";
        conteudo.classList.remove("antesDoClique");
        conteudo.classList.add("aposOClique");
        botao.style.display = "none"; // Oculta o botão
        gatinhoContainer.style.display = "flex";

        // Exibe a mensagem com fade-in
        mensagem.style.display = "block";
        mensagem.style.animation = "fadeIn 1s ease-in-out";
    } else {
        conteudo.classList.remove("aposOClique");
        conteudo.classList.add("antesDoClique");

        // Oculta a mensagem com fade-out
        mensagem.style.animation = "fadeOut 1s ease-in-out";
        setTimeout(function() {
            mensagem.style.display = "none";
        }, 1000); // Tempo da animação (1 segundo)
        
        botao.style.display = "block"; // Exibe o botão
        gatinhoContainer.style.display = "none";
    }
}
