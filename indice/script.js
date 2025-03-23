function showCommandInfo(command) {
    const modal = document.getElementById('modal');
    const title = document.getElementById('modal-title');
    const info = document.getElementById('modal-info');

    title.textContent = command;

    switch (command) {
        case 'ls':
            info.textContent = 'Lista os arquivos e diretórios no diretório atual.';
            break;
        case 'cd [diretório]':
            info.textContent = 'Muda para o diretório especificado.';
            break;
        case 'mkdir [nome]':
            info.textContent = 'Cria um novo diretório.';
            break;
        case 'rm [arquivo]':
            info.textContent = 'Remove um arquivo.';
            break;
        case 'rmdir [diretório]':
            info.textContent = 'Remove um diretório vazio.';
            break;
        case 'ifconfig':
            info.textContent = 'Mostra informações das interfaces de rede.';
            break;
        case 'ping [endereço]':
            info.textContent = 'Testa conectividade com um endereço.';
            break;
        case 'netstat':
            info.textContent = 'Mostra conexões de rede ativas.';
            break;
        case 'nmap [alvo]':
            info.textContent = 'Realiza varredura de portas em um alvo.';
            break;
        case 'curl [URL]':
            info.textContent = 'Faz requisições HTTP.';
            break;
        default:
            info.textContent = 'Informação não disponível.';
    }

    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}
