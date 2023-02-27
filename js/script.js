const statsName = Array.from(document.querySelectorAll('[data-stats="name"]'))
const statsValue = Array.from(document.querySelectorAll('[data-stats="value"]'))
const statsMedia = document.querySelector('[data-stats="media"]')
const statsClass = document.querySelector('[data-stats="class"]')
const content = document.querySelector('[data-anima')

content.classList.add('show-up')

async function fetchData() {
    const data = await fetch('data.json')
    const dataJSON = await data.json()
    let soma = 0
    for (i in dataJSON) {
        statsValue[i].innerText = dataJSON[i].score
        soma += dataJSON[i].score
    }
    soma = Math.floor(soma / 4)
    if (soma <= 25) {
        statsClass.innerText = 'Critical'
    } else if (soma <= 50) {
        statsClass.innerText = 'Average'
    } else if (soma <= 75) {
        statsClass.innerText = 'Good'
    } else {
        statsClass.innerText = 'Great'
    }
    statsMedia.innerText = soma
}
fetchData()



