// Função para passar dados como parâmetro
function gerarTicket() {
    // Pega as informações do usuário
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const github = document.getElementById('github').value;

    // Verifica se os campos estão preenchidos
    if (!nome || !email) {
        alert('Por favor, preencha todos os campos!');
        return;
    }
    
    // Cria uma URL com parâmetros para a próxima página
    const url = `ticket.html?nome=${encodeURIComponent(nome)}&email=${encodeURIComponent(email)}&github=${encodeURIComponent(github)}`;
    
    // Redireciona para a nova página
    window.location.href = url;
}