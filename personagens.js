// listar os itens que foram adicionados nos inputs do form
let informacaoPersonagem = []
const divMenu = document.querySelector("#adicionar-personagem")

function fecharPopupJanelinha() {
    divPopupPersonagem.classList.toggle('oculta')

}


// função de enviar e verificar se há informações no campo 
function enviarProtagonista(evento) {
    evento.preventDefault()

    const form = document.querySelector('form')
    const inputs = new FormData(form)

    const fotoCapa = inputs.get('protagonista_foto')
    const nomePerso = inputs.get('protagonista_nome')
    const nomeReal = inputs.get('nome_real')
    const filme = inputs.get('nome_filme')
    const habil = inputs.get('habilidades')
    const descri = inputs.get('descricao')

    if (fotoCapa && nomePerso && nomeReal && filme && habil && descri) {
        informacaoPersonagem.push(fotoCapa, "Nome: " + nomePerso, "Ator/atriz:" + nomeReal, "Filme: " + filme, "Habilidades: " + habil, "Descrição: " + descri)
        const conversaoArray = JSON.stringify(informacaoPersonagem)
        localStorage.setItem("infosArray", conversaoArray)
        divMenu.classList.add('oculta')
    }

    mostrarImagem()
}

if (localStorage.getItem('infosArray')) {
    informacaoPersonagem = JSON.parse(localStorage.getItem('infosArray'))
}

const perso1 = document.querySelector("#perso1")
const perso2 = document.querySelector("#perso2")
const perso3 = document.querySelector("#perso3")
const perso4 = document.querySelector("#perso4")
const perso5 = document.querySelector("#perso5")
const perso6 = document.querySelector("#perso6")
const perso7 = document.querySelector("#perso7")
const perso8 = document.querySelector("#perso8")
const perso9 = document.querySelector("#perso9")
const perso10 = document.querySelector("#perso10")
const perso11 = document.querySelector("#perso11")

function mostrarImagem() {
    switch (true) {
        case informacaoPersonagem.length >= 66:
            divMenu.innerHTML = ('A quantidade máxima de personagens foi alcaçada. Remova um personagem para continuar.')
            perso11.style.backgroundImage = `url("${informacaoPersonagem[60]}")`

        case informacaoPersonagem.length >= 6:
            perso1.style.backgroundImage = `url("${informacaoPersonagem[0]}")`

        case informacaoPersonagem.length >= 12:
            perso2.style.backgroundImage = `url("${informacaoPersonagem[6]}")`

        case informacaoPersonagem.length >= 18:
            perso3.style.backgroundImage = `url("${informacaoPersonagem[12]}")`

        case informacaoPersonagem.length >= 24:
            perso4.style.backgroundImage = `url("${informacaoPersonagem[18]}")`

        case informacaoPersonagem.length >= 30:
            perso5.style.backgroundImage = `url("${informacaoPersonagem[24]}")`

        case informacaoPersonagem.length >= 36:
            perso6.style.backgroundImage = `url("${informacaoPersonagem[30]}")`

        case informacaoPersonagem.length >= 42:
            perso7.style.backgroundImage = `url("${informacaoPersonagem[36]}")`

        case informacaoPersonagem.length >= 48:
            perso8.style.backgroundImage = `url("${informacaoPersonagem[42]}")`

        case informacaoPersonagem.length >= 54:
            perso9.style.backgroundImage = `url("${informacaoPersonagem[48]}")`

        case informacaoPersonagem.length >= 60:
            perso10.style.backgroundImage = `url("${informacaoPersonagem[54]}")`
            break
        default:
            perso1.style.backgroundImage = ''
            break
    }
}



// abrir e fechar o popup
const popUp = document.querySelector('#pop-up')
function fecharPopup() {
    popUp.classList.toggle('oculta')
}

let contador = 0
const divPopupPersonagem = document.querySelector('#div-popup-perso')

function popPerso(evento) {
    divPopupPersonagem.innerHTML = (`<button onclick="fecharPopupJanelinha()" class="fechar-popup">x</button>`)
    switch (evento.target.id) {
        case "perso1":
            if (informacaoPersonagem[1]) {
                for (i = 1; i < 6; i++) {
                    divPopupPersonagem.innerHTML += (`${informacaoPersonagem[i]}<br>`)
                }
                divPopupPersonagem.classList.toggle('oculta')
            }
            contador = 1
            divPopupPersonagem.innerHTML += (`<button onclick="apagarPerso()" id="botao-apagar-perso">Apagar Personagem</button>`)
            break

        case "perso2":
            if (informacaoPersonagem[7]) {
                for (i = 7; i < 12; i++) {
                    divPopupPersonagem.innerHTML += (`${informacaoPersonagem[i]}<br>`)
                }
                divPopupPersonagem.classList.toggle('oculta')
            }
            contador = 2
            divPopupPersonagem.innerHTML += (`<button onclick="apagarPerso()" id="botao-apagar-perso">Apagar Personagem</button>`)
            break

        case "perso3":
            if (informacaoPersonagem[13]) {
                for (i = 13; i < 18; i++) {
                    divPopupPersonagem.innerHTML += (`${informacaoPersonagem[i]}<br>`)
                }
                divPopupPersonagem.classList.toggle('oculta')
            }
            contador = 3
            divPopupPersonagem.innerHTML += (`<button onclick="apagarPerso()" id="botao-apagar-perso">Apagar Personagem</button>`)
            break

        case "perso4":
            if (informacaoPersonagem[19]) {
                for (i = 19; i < 24; i++) {
                    divPopupPersonagem.innerHTML += (`${informacaoPersonagem[i]}<br>`)
                }
                divPopupPersonagem.classList.toggle('oculta')
            }
            contador = 4
            divPopupPersonagem.innerHTML += (`<button onclick="apagarPerso()" id="botao-apagar-perso">Apagar Personagem</button>`)
            break

        case "perso5":
            if (informacaoPersonagem[25]) {
                for (i = 25; i < 30; i++) {
                    divPopupPersonagem.innerHTML += (`${informacaoPersonagem[i]}<br>`)
                }
                divPopupPersonagem.classList.toggle('oculta')
            }
            contador = 5
            divPopupPersonagem.innerHTML += (`<button onclick="apagarPerso()" id="botao-apagar-perso">Apagar Personagem</button>`)
            break

        case "perso6":
            if (informacaoPersonagem[31]) {
                for (i = 31; i < 36; i++) {
                    divPopupPersonagem.innerHTML += (`${informacaoPersonagem[i]}<br>`)
                }
                divPopupPersonagem.classList.toggle('oculta')
            }
            contador = 6
            divPopupPersonagem.innerHTML += (`<button onclick="apagarPerso()" id="botao-apagar-perso">Apagar Personagem</button>`)
            break

        case "perso7":
            if (informacaoPersonagem[37]) {
                for (i = 37; i < 42; i++) {
                    divPopupPersonagem.innerHTML += (`${informacaoPersonagem[i]}<br>`)
                }
                divPopupPersonagem.classList.toggle('oculta')
            }
            contador = 7
            divPopupPersonagem.innerHTML += (`<button onclick="apagarPerso()" id="botao-apagar-perso">Apagar Personagem</button>`)
            break

        case "perso8":
            if (informacaoPersonagem[43]) {
                for (i = 43; i < 48; i++) {
                    divPopupPersonagem.innerHTML += (`${informacaoPersonagem[i]}<br>`)
                }
                divPopupPersonagem.classList.toggle('oculta')
            }
            contador = 8
            divPopupPersonagem.innerHTML += (`<button onclick="apagarPerso()" id="botao-apagar-perso">Apagar Personagem</button>`)
            break

        case "perso9":
            if (informacaoPersonagem[49]) {
                for (i = 49; i < 54; i++) {
                    divPopupPersonagem.innerHTML += (`${informacaoPersonagem[i]}<br>`)
                }
                divPopupPersonagem.classList.toggle('oculta')
            }
            contador = 9
            divPopupPersonagem.innerHTML += (`<button onclick="apagarPerso()" id="botao-apagar-perso">Apagar Personagem</button>`)
            break

        case "perso10":
            if (informacaoPersonagem[55]) {
                for (i = 55; i < 60; i++) {
                    divPopupPersonagem.innerHTML += (`${informacaoPersonagem[i]}<br>`)
                }
                divPopupPersonagem.classList.toggle('oculta')
            }
            contador = 10
            divPopupPersonagem.innerHTML += (`<button onclick="apagarPerso()" id="botao-apagar-perso">Apagar Personagem</button>`)
            break

        case "perso11":
            if (informacaoPersonagem[61]) {
                for (i = 61; i < 66; i++) {
                    divPopupPersonagem.innerHTML += (`${informacaoPersonagem[i]}<br>`)
                }
                divPopupPersonagem.classList.toggle('oculta')
            }
            contador = 11
            divPopupPersonagem.innerHTML += (`<button onclick="apagarPerso()" id="botao-apagar-perso">Apagar Personagem</button>`)
            break

    }
}

function apagarPerso() {
    switch (contador) {
        case 1:
            informacaoPersonagem.splice(0, 6)
            break
        case 2:
            informacaoPersonagem.splice(6, 6)
            break
        case 3:
            informacaoPersonagem.splice(12, 6)
            break
        case 4:
            informacaoPersonagem.splice(18, 6)
            break
        case 5:
            informacaoPersonagem.splice(24, 6)
            break
        case 6:
            informacaoPersonagem.splice(30, 6)
            break
        case 7:
            informacaoPersonagem.splice(36, 6)
            break
        case 8:
            informacaoPersonagem.splice(42, 6)
            break
        case 9:
            informacaoPersonagem.splice(48, 6)
            break
        case 10:
            informacaoPersonagem.splice(54, 6)
            break
        case 11:
            informacaoPersonagem.splice(60, 6)
            break
    }
    divPopupPersonagem.classList.add('oculta')
    const conversaoArray = JSON.stringify(informacaoPersonagem)
    localStorage.setItem("infosArray", conversaoArray)
    mostrarImagem()
}
