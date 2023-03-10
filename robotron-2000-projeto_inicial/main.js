// const subtrair = document.querySelector("#subtrair")
// const somar = document.querySelector("#somar")

const controle = document.querySelectorAll("[data-controle]")

const estatisticas = document.querySelectorAll("[data-estatisticas]")

const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -10
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -12
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": 5
    }
}

controle.forEach ( (elemento) => {
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode)
        atualizaEstatisticas(evento.target.dataset.peca)
    })
})

// somar.addEventListener("click" , () =>{manipulaDados("somar")})

// subtrair.addEventListener("click" , () =>{manipulaDados("subtrair")})

function manipulaDados (operaçao, controle) {

    const peca = controle.querySelector("[data-contador]")

    if(operaçao === "-"){
        peca.value = parseInt(peca.value) -1  
    } else {
        peca.value = parseInt(peca.value) +1
    }
}

function atualizaEstatisticas (peca) {

    estatisticas.forEach ( (elemento) => {
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatisticas]
    })
}