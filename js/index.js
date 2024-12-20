
function criarAndar(){
    const coluna = document.querySelectorAll('[andar]')
    coluna.forEach(el =>{
        const qntd = +el.getAttribute('andar');
        for(let i=0;i<qntd;i++){
            const andar = document.createElement('div')
            andar.classList.add('andar')

            const porta = document.createElement('div')
            porta.classList.add('porta')
            andar.appendChild(porta);

            const macaneta = document.createElement('div')
            macaneta.classList.add('macaneta')

            porta.appendChild(macaneta);
            el.appendChild(andar);
        }

        const terreo = document.createElement('div')
        terreo.classList.add('terreo');

        const janela = document.createElement('div')
        janela.classList.add('janela')
        terreo.appendChild(janela)
        el.appendChild(terreo)
        console.log(qntd);
    })
}

function posicionarElevador(andarSelecionado) {
    // Define a altura de cada andar
    const alturaPorAndar = 73.5; // Altura em pixels
    let posicao = 0;

    // Calcula a posição com base no andar
    switch (andarSelecionado) {
        case "T":
            posicao = 0; // Térreo (altura 0)
            break;
        case "1":
            posicao = 1 * alturaPorAndar; // Primeiro andar
            break;
        case "2":
            posicao = 2 * alturaPorAndar;
            break;
        case "3":
            posicao = 3 * alturaPorAndar;
            break;
        case "4":
            posicao = 4 * alturaPorAndar;
            break;
        case "5":
            posicao = 5 * alturaPorAndar;
            break;
        case "6":
            posicao = 6 * alturaPorAndar;
            break;
        default:
            console.error("Andar inválido.");
            return;
    }

    // Move o elevador para a posição calculada
    const elevador = document.querySelector('.elevador');
    elevador.style.transform = `translateY(-${posicao}px)`;

    console.log(`Elevador movido para o andar ${andarSelecionado} (posição: ${posicao}px).`);
}

// Adicionando evento de clique aos botões
document.querySelectorAll('.item-lista').forEach(botao => {
    botao.addEventListener('click', () => {
        const andar = botao.textContent.trim(); // Obtém o texto do botão
        posicionarElevador(andar); // Chama a função para mover o elevador
    });
});

criarAndar();
