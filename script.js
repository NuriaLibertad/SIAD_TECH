const botao = document.getElementById("btn-conexao");

if (botao) {
    botao.addEventListener("click", function() {
        alert("Conexão realizada com sucesso! Entraremos em contato.");
        
        botao.textContent = "Enviado!";
    });
}