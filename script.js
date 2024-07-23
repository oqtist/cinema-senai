const divMenu = document.querySelector("#div-popup")
const divFilmes = document.querySelector('#div-filmes')
const divPopupFilme = document.querySelector('#div-popup-filme')

function fecharPopup() {
    divMenu.classList.toggle('oculta')
    divPopupFilme.classList.add('oculta')
}
function fecharPopupFilme () {
    divPopupFilme.classList.toggle('oculta')
}

let arrayFilmes = []

if (localStorage.getItem('arraySalvo')) {
    arrayFilmes = JSON.parse(localStorage.getItem('arraySalvo'))
    addDivFilmes()
}

function enviarFilme(evento) {
    evento.preventDefault()

    const form = document.querySelector('form')
    const inputs = new FormData(form)

    let filmeEnviado = []

    filmeEnviado.push(inputs.get('foto-da-capa'),inputs.get('titulo'),inputs.get('diretor'),inputs.get('data-lancamento'),inputs.get('genero'),inputs.get('sinopse'))

    arrayFilmes.push(filmeEnviado)
    addDivFilmes()

    const arrayConvertido = JSON.stringify(arrayFilmes)
    localStorage.setItem("arraySalvo", arrayConvertido)
}


function addDivFilmes() {
    divFilmes.innerHTML = '<div id="div-adicionar-filme"><p>Adicionar Filme</p><button onclick="fecharPopup()">+</button></div>'
    for(i=0;i<arrayFilmes.length;i++) {
        let a = divFilmes.innerHTML += '<div onclick="menuFilme(event)" class="class-filme-covers" id="'+(i)+'"></div>'
        const filmeAtual = document.getElementById(i)
        const arrayAtual = arrayFilmes[i]
        const capaAtual = arrayAtual[0]
        filmeAtual.style.backgroundImage = `url(${capaAtual})`
    }
    const arrayConvertido = JSON.stringify(arrayFilmes)
    localStorage.setItem("arraySalvo", arrayConvertido)
}

let checkSameMovie

function menuFilme(evento) {
    divPopupFilme.innerHTML = (`<h2>Informações do Filme:</h2><button class="fechar-popup" onclick="fecharPopupFilme()">x</button>`)
    const filmeSelecionado = arrayFilmes[evento.target.id]

    if(checkSameMovie == evento.target.id) {
        divPopupFilme.classList.toggle('oculta')
        divMenu.classList.add('oculta')
    } else {
        divPopupFilme.classList.remove('oculta')
        divMenu.classList.add('oculta')
    }
    divPopupFilme.innerHTML += (`Título do Filme: ${filmeSelecionado[1]}<br>Diretor: ${filmeSelecionado[2]}<br>Data de Lançamento: ${filmeSelecionado[3]}<br>Gênero: ${filmeSelecionado[4]}<br>Sinopse: ${filmeSelecionado[5]}<br><button id="botao-apagar-filme" onclick="removerFilme(event)">Remover Filme</button>`)

    checkSameMovie = evento.target.id
}

function removerFilme(evento) {
    arrayFilmes.splice(evento.target.id,1)
    fecharPopupFilme()
    addDivFilmes()
}