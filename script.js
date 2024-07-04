
const popup = document.querySelector('#div-popup')
function fecharPopup() {
    popup.classList.toggle('oculta')
}
function fecharPopupFilme() {
    divPopupFilme.classList.toggle('oculta')
}

const divPopupFilme = document.querySelector('#div-popup-filme')
const botaoFecharPopupFilme = document.querySelector('#botao-fechar-filme')

let informacoesFilmes = []
const filme1 = document.querySelector('#filme-1')
const filme2 = document.querySelector('#filme-2')
const filme3 = document.querySelector('#filme-3')
const filme4 = document.querySelector('#filme-4')
const filme5 = document.querySelector('#filme-5')
const filme6 = document.querySelector('#filme-6')
const filme7 = document.querySelector('#filme-7')
const filme8 = document.querySelector('#filme-8')
const filme9 = document.querySelector('#filme-9')
const filme10 = document.querySelector('#filme-10')
const filme11 = document.querySelector('#filme-11')
const divMenu = document.querySelector('#div-adicionar-filme')

function enviarFilme(evento) {
    evento.preventDefault()

    const form = document.querySelector('form')
    const inputs = new FormData(form)

    const urlCapa = inputs.get('foto-da-capa')
    const titulo = inputs.get('titulo')
    const diretor = inputs.get('diretor')
    const dataLancamento = inputs.get('data-lancamento')
    const genero = inputs.get('genero')
    const sinopse = inputs.get('sinopse')

    if (urlCapa && titulo && diretor && dataLancamento && genero && sinopse) {
        informacoesFilmes.push(urlCapa, 'Título: ' + titulo, 'Diretor: ' + diretor, 'Ano de Lançamento: ' + dataLancamento, 'Gênero: ' + genero, 'Sinopse: ' + sinopse)

        const arrayConvertido = JSON.stringify(informacoesFilmes)
        localStorage.setItem('arraySalvo', arrayConvertido)
        popup.classList.add('oculta')
    }
    switchCarregar()

}

if (localStorage.getItem('arraySalvo')) {
    informacoesFilmes = JSON.parse(localStorage.getItem('arraySalvo'))
}

function switchCarregar() {
    switch (true) {
        case informacoesFilmes.length >= 66:
            divMenu.innerHTML = (`<p>O total de filmes foi alcançado. Tente remover um filme.</p>`)
            filme11.style.backgroundImage = `url("${informacoesFilmes[60]}")`;
        case informacoesFilmes.length >= 6:
            filme1.style.backgroundImage = `url("${informacoesFilmes[0]}")`;
        case informacoesFilmes.length >= 12:
            filme2.style.backgroundImage = `url("${informacoesFilmes[6]}")`;
        case informacoesFilmes.length >= 18:
            filme3.style.backgroundImage = `url("${informacoesFilmes[12]}")`;
        case informacoesFilmes.length >= 24:
            filme4.style.backgroundImage = `url("${informacoesFilmes[18]}")`;
        case informacoesFilmes.length >= 30:
            filme5.style.backgroundImage = `url("${informacoesFilmes[24]}")`;
        case informacoesFilmes.length >= 36:
            filme6.style.backgroundImage = `url("${informacoesFilmes[30]}")`;
        case informacoesFilmes.length >= 42:
            filme7.style.backgroundImage = `url("${informacoesFilmes[36]}")`;
        case informacoesFilmes.length >= 48:
            filme8.style.backgroundImage = `url("${informacoesFilmes[42]}")`;
        case informacoesFilmes.length >= 54:
            filme9.style.backgroundImage = `url("${informacoesFilmes[48]}")`;
        case informacoesFilmes.length >= 60:
            filme10.style.backgroundImage = `url("${informacoesFilmes[54]}")`;
            break
        default:
            filme1.style.backgroundImage = ''
            break
    }
}

let contador = 0

function popupFilme(evento) {
    divPopupFilme.innerHTML = (`<button onclick="fecharPopupFilme()" class="fechar-popup">x</button>`)
    switch (evento.target.id) {
        case 'filme-1':
            if (informacoesFilmes[0]) {
                for (i = 1; i < 6; i++) {
                    divPopupFilme.innerHTML += (`${informacoesFilmes[i]}<br>`)
                }
                divPopupFilme.classList.remove('oculta')
            }
            contador = 1
            divPopupFilme.innerHTML += (`<button onclick="apagarFilme()" id="botao-apagar-filme">Apagar Filme</button>`)
            break
        case 'filme-2':
            if (informacoesFilmes[6]) {
                for (i = 7; i < 12; i++) {
                    divPopupFilme.innerHTML += (`${informacoesFilmes[i]}<br>`)
                    divPopupFilme.classList.remove('oculta')
                }
            }
            contador = 2
            divPopupFilme.innerHTML += (`<button onclick="apagarFilme()" id="botao-apagar-filme">Apagar Filme</button>`)
            break
        case 'filme-3':
            if (informacoesFilmes[12]) {
                for (i = 13; i < 18; i++) {
                    divPopupFilme.innerHTML += (`${informacoesFilmes[i]}<br>`)
                    divPopupFilme.classList.remove('oculta')
                }
            }
            contador = 3
            divPopupFilme.innerHTML += (`<button onclick="apagarFilme()" id="botao-apagar-filme">Apagar Filme</button>`)
            break
        case 'filme-4':
            if (informacoesFilmes[18]) {
                for (i = 19; i < 24; i++) {
                    divPopupFilme.innerHTML += (`${informacoesFilmes[i]}<br>`)
                    divPopupFilme.classList.remove('oculta')
                }
            }
            contador = 4
            divPopupFilme.innerHTML += (`<button onclick="apagarFilme()" id="botao-apagar-filme">Apagar Filme</button>`)
            break
        case 'filme-5':
            if (informacoesFilmes[24]) {
                for (i = 25; i < 30; i++) {
                    divPopupFilme.innerHTML += (`${informacoesFilmes[i]}<br>`)
                    divPopupFilme.classList.remove('oculta')
                }
            }
            contador = 5
            divPopupFilme.innerHTML += (`<button onclick="apagarFilme()" id="botao-apagar-filme">Apagar Filme</button>`)
            break
        case 'filme-6':
            if (informacoesFilmes[30]) {
                for (i = 31; i < 36; i++) {
                    divPopupFilme.innerHTML += (`${informacoesFilmes[i]}<br>`)
                    divPopupFilme.classList.remove('oculta')
                }
            }
            contador = 6
            divPopupFilme.innerHTML += (`<button onclick="apagarFilme()" id="botao-apagar-filme">Apagar Filme</button>`)
            break
        case 'filme-7':
            if (informacoesFilmes[36]) {
                for (i = 37; i < 42; i++) {
                    divPopupFilme.innerHTML += (`${informacoesFilmes[i]}<br>`)
                    divPopupFilme.classList.remove('oculta')
                }
            }
            contador = 7
            divPopupFilme.innerHTML += (`<button onclick="apagarFilme()" id="botao-apagar-filme">Apagar Filme</button>`)
            break
        case 'filme-8':
            if (informacoesFilmes[42]) {
                for (i = 43; i < 48; i++) {
                    divPopupFilme.innerHTML += (`${informacoesFilmes[i]}<br>`)
                    divPopupFilme.classList.remove('oculta')
                }
            }
            contador = 8
            divPopupFilme.innerHTML += (`<button onclick="apagarFilme()" id="botao-apagar-filme">Apagar Filme</button>`)
            break
        case 'filme-9':
            if (informacoesFilmes[48]) {
                for (i = 49; i < 54; i++) {
                    divPopupFilme.innerHTML += (`${informacoesFilmes[i]}<br>`)
                    divPopupFilme.classList.remove('oculta')
                }
            }
            contador = 9
            divPopupFilme.innerHTML += (`<button onclick="apagarFilme()" id="botao-apagar-filme">Apagar Filme</button>`)
            break
        case 'filme-10':
            if (informacoesFilmes[54]) {
                for (i = 55; i < 60; i++) {
                    divPopupFilme.innerHTML += (`${informacoesFilmes[i]}<br>`)
                    divPopupFilme.classList.remove('oculta')
                }
            }
            contador = 10
            divPopupFilme.innerHTML += (`<button onclick="apagarFilme()" id="botao-apagar-filme">Apagar Filme</button>`)
            break
        case 'filme-11':
            if (informacoesFilmes[60]) {
                for (i = 61; i < 66; i++) {
                    divPopupFilme.innerHTML += (`${informacoesFilmes[i]}<br>`)
                    divPopupFilme.classList.remove('oculta')
                }
            }
            contador = 11
            divPopupFilme.innerHTML += (`<button onclick="apagarFilme()" id="botao-apagar-filme">Apagar Filme</button>`)
            break
        default:
            break
    }
}

function apagarFilme() {
    switch (contador) {
        case 1:
            informacoesFilmes.splice(0, 6)
            break
        case 2:
            informacoesFilmes.splice(6, 6)
            break
        case 3:
            informacoesFilmes.splice(12, 6)
            break
        case 4:
            informacoesFilmes.splice(18, 6)
            break
        case 5:
            informacoesFilmes.splice(24, 6)
            break
        case 6:
            informacoesFilmes.splice(30, 6)
            break
        case 7:
            informacoesFilmes.splice(36, 6)
            break
        case 8:
            informacoesFilmes.splice(42, 6)
            break
        case 9:
            informacoesFilmes.splice(48, 6)
            break
        case 10:
            informacoesFilmes.splice(54, 6)
            break
        case 11:
            informacoesFilmes.splice(60, 6)
            break
    }
    divPopupFilme.classList.add('oculta')
    arrayConvertido = JSON.stringify(informacoesFilmes)
    localStorage.setItem('arraySalvo', arrayConvertido)
    switchCarregar()
}

function clearLocalStorage() {
    localStorage.clear()
}