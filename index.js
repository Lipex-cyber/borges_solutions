// Scroll suave
document.querySelectorAll('a[href^="#"]:not(.whatsapp)').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// MENU MOBILE
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

// ENVIO PARA WHATSAPP
document.getElementById("orcamentoForm").addEventListener("submit", function(e){
    e.preventDefault();

    const numero = "5551991277265";

    const servico = document.getElementById("servico").value;
    const nome = document.getElementById("nome").value;
    const descricao = document.getElementById("descricao").value;

    const mensagem = 
`Olá, gostaria de solicitar um orçamento.

*Nome/Empresa:* ${nome}
*Tipo de Serviço:* ${servico}

*Descrição:* ${descricao}

Aguardo retorno.`;

    const link = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

    window.open(link, "_blank");
});
