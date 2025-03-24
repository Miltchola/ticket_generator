window.onload = () => {
    // Recupera os dados do localStorage
    const nome = localStorage.getItem('ticketNome');
    const email = localStorage.getItem('ticketEmail');
    const github = localStorage.getItem('ticketGithub');
    const imagemBase64 = localStorage.getItem('ticketImagem');

    // Exibe os dados na página
    document.getElementById('ticket-nome').innerText = nome;
    document.getElementById('ticket-nome-info').innerText = nome; // Atualiza o <h5>
    document.getElementById('ticket-email').innerText = email;
    document.getElementById('ticket-github').innerText = github;
    document.getElementById('ticket-imagem').src = imagemBase64;

    console.log("Nome: ", document.getElementById('ticket-nome').innerText);

    // Limpa o localStorage após usar os dados
    localStorage.removeItem('ticket-nome');
    localStorage.removeItem('ticket-email');
    localStorage.removeItem('ticket-github');
    localStorage.removeItem('ticket-imagem');
};

// DATA DINÂMICA !!

const dataAtual = new Date();

// Formata a data pro padrão da imagem de referência
const opcoes = { month: 'short', day: 'numeric', year: 'numeric' }; // Mês dia, ano (ex: Fev 17, 2025)
const dataFormatada = dataAtual.toLocaleDateString('en-US', opcoes);

console.log("data: ", dataFormatada);

document.getElementById('data-atual').textContent = dataFormatada;