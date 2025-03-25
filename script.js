// Seleciona os elementos necessários
// Check de Imagem
const uploadIcon = document.querySelector('.upload-icon');

const uploadText = document.querySelector('.input_img h6');
const imgButtons = document.querySelector('.input_img_section_buttons');
const inputImgContainer = document.querySelector('.input_img');

const inputImagem = document.getElementById('inputImagem'); // Pega a imagem


// Evento pra quando a página é aberta
window.addEventListener ('pageshow', function(event){
    localStorage.clear(); // Limpa armazenamento Local

    // Limpa todos os espaços da Tela quando a página abre
    document.getElementById('nome').value = '';
    document.getElementById('email').value = '';
    document.getElementById('github').value = '';
    document.getElementById('inputImagem').value = '';

});


// Função para validar e exibir a imagem carregada
inputImagem.addEventListener('change', (event) => {
    const arquivo = event.target.files[0];

    if (!arquivo) return;

    // Verifica se o arquivo é PNG ou JPG
    const tiposPermitidos = ['image/png', 'image/jpeg'];
    if (!tiposPermitidos.includes(arquivo.type)) {
        document.getElementById('alert-image').innerText = 'Only PNG or JPG images are allowed!';
        document.getElementById('alert-image').style.color = 'hsl(7, 71%, 60%)';
        inputImagem.value = '';
        return;
    }

    // Verifica se o arquivo tem no máximo 500KB
    const tamanhoMaximo = 500 * 1024; // 500KB em bytes
    if (arquivo.size > tamanhoMaximo) {
        document.getElementById('alert-image').innerText = 'The file must be a maximum of 500KB!';
        document.getElementById('alert-image').style.color = 'hsl(7, 71%, 60%)';
        inputImagem.value = '';
        return;
    }

    // Lê a imagem e exibe no lugar do upload-icon
    const leitor = new FileReader();
    leitor.onload = (e) => {
        uploadIcon.src = e.target.result;
        uploadIcon.style.backgroundColor = 'transparent';
        uploadIcon.style.border = 'none';

        // Oculta o texto e exibe os botões
        uploadText.style.display = 'none';
        imgButtons.style.visibility = 'visible'; // Exibe os botões
    };
    leitor.readAsDataURL(arquivo);
});


// Função para remover a imagem e resetar o estado inicial
document.getElementById('remove').addEventListener('click', () => {
    uploadIcon.src = 'assets/images/icon-upload.svg';
    uploadIcon.style.backgroundColor = 'rgb(135, 132, 164)';
    uploadIcon.style.border = '1px solid hsl(252, 6%, 83%)';

    // Mostra novamente o texto e esconde os botões
    uploadText.style.display = 'block';
    imgButtons.style.visibility = 'hidden';

    // Limpa o input de imagem
    inputImagem.value = '';
});


// Função para mudar a imagem ao clicar no botão "Mudar Imagem"
document.getElementById('change').addEventListener('click', () => {
    inputImagem.click();
});


inputImagem.addEventListener('change', (event) => {
    const file = event.target.files[0];
  
    // Verifica se o arquivo é válido
    if (file && (file.type === 'image/png' || file.type === 'image/jpeg')) {
      const reader = new FileReader();
      
      reader.onload = (e) => {
        uploadIcon.src = e.target.result;
        uploadIcon.id = 'uploadPreview'; // Aplica o CSS reduzido
      };
      
      reader.readAsDataURL(file);
    } else {
      alert('Please put a valid image');
    }
});


// Função para passar dados como parâmetro
// Cria a nova página do Ticket
function gerarTicket() {

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const github = document.getElementById('github').value;

    if (inputImagem.files.length === 0) {
        document.getElementById('alert-info').style.visibility = 'hidden';
        document.getElementById('alert-image').innerText = 'You must insert a image';
        document.getElementById('alert-image').style.color = 'hsl(7, 71%, 60%)';
        return;
    }

    if (!nome) {
       document.getElementById('alert-nome').style.visibility = 'visible';
        return;
    }
    if (!email) {
        document.getElementById('alert-email').style.visibility = 'visible';
         return;
    }
    if (!github) {
        document.getElementById('alert-github').style.visibility = 'visible';
         return;
    }

    const leitor = new FileReader();
    leitor.onload = (e) => {
        const imagemBase64 = e.target.result;

        // Armazena os dados no localStorage
        // utilizando localStorage para recuperar itens na página de tickets
        localStorage.setItem('ticketNome', nome);
        localStorage.setItem('ticketEmail', email);
        localStorage.setItem('ticketGithub', github);
        localStorage.setItem('ticketImagem', imagemBase64);

        // Redireciona para a página do ticket
        window.location.href = 'ticket.html';
    };

    leitor.readAsDataURL(inputImagem.files[0]);
}