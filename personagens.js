const divMenu = document.querySelector("#div-popup")
const divPersonagens = document.querySelector('#div-personagens')
const divPopupChars = document.querySelector('#div-popup-chars')

function fecharPopup() {
    divMenu.classList.toggle('oculta')
    divPopupChars.classList.add('oculta')
}
function fecharPopupChar () {
    divPopupChars.classList.toggle('oculta')
}

let arrayPersonagens = []

if (localStorage.getItem('arraySalvoChars')) {
    arrayPersonagens = JSON.parse(localStorage.getItem('arraySalvoChars'))
    addDivChars()
}

function enviarPersonagem(evento) {
    evento.preventDefault()

    const form = document.querySelector('form')
    const inputs = new FormData(form)

    let charEnviado = []

    charEnviado.push(inputs.get('foto-char'),inputs.get('nome'),inputs.get('actor'),inputs.get('nome-filme'),inputs.get('habilidades'),inputs.get('descricao'))

    arrayPersonagens.push(charEnviado)
    addDivChars()

    const arrayConvertido = JSON.stringify(arrayPersonagens)
    localStorage.setItem("arraySalvoChars", arrayConvertido)
}


function addDivChars() {
    divPersonagens.innerHTML = '<div id="div-adicionar-char"><p>Adicionar Personagem</p><button onclick="fecharPopup()">+</button></div>'
    for(i=0;i<arrayPersonagens.length;i++) {
        let a = divPersonagens.innerHTML += '<div onclick="menuChar(event)" class="class-char-covers" id="'+(i)+'"></div>'
        const charAtual = document.getElementById(i)
        const arrayAtual = arrayPersonagens[i]
        const capaAtual = arrayAtual[0]
        charAtual.style.backgroundImage = `url(${capaAtual})`
    }
    const arrayConvertido = JSON.stringify(arrayPersonagens)
    localStorage.setItem("arraySalvoChars", arrayConvertido)
}

let checkSameChar

function menuChar(evento) {
    divPopupChars.innerHTML = (`<h2>Informações do/a Personagem:</h2><button class="fechar-popup" onclick="fecharPopupChar()">x</button>`)
    const charSelecionado = arrayPersonagens[evento.target.id]

    if(checkSameChar == evento.target.id) {
        divPopupChars.classList.toggle('oculta')
        divMenu.classList.add('oculta')
    } else {
        divPopupChars.classList.remove('oculta')
        divMenu.classList.add('oculta')
    }
    divPopupChars.innerHTML += (`Nome: ${charSelecionado[1]}<br>Intérprete: ${charSelecionado[2]}<br>Nome do Filme: ${charSelecionado[3]}<br>Habilidades: ${charSelecionado[4]}<br>Descrição: ${charSelecionado[5]}<br><button id="botao-apagar-char" onclick="removerChar(event)">Remover Personagem</button>`)

    checkSameMovie = evento.target.id
}

function removerChar(evento) {
    arrayPersonagens.splice(evento.target.id,1)
    fecharPopupChar()
    addDivChars()
}