
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
        console.log(qntd);
    })
}

criarAndar();