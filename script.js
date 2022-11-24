// Variáveis
let randomNum = Math.round(Math.random() * 10)
let attempts = 1

const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const btnPlay = document.querySelector('#btnPlay')
const btnReset = document.querySelector('#btnReset')
const paragraph = screen1.querySelector('p')

// Eventos
btnPlay.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keypress', handleEnterKey)

// Funções
function handleTryClick(e){
  e.preventDefault()

  const inputNumber = document.querySelector('#inputNumber')

  if(inputNumber.value == ''){
    return paragraph.innerText = `Digite um número válido`
  }

  if(Number(inputNumber.value) < 0 || Number(inputNumber.value) > 10){
    return paragraph.innerText = `O número precisa ser entre 0 e 10`
  } else {
    if(Number(inputNumber.value) == randomNum){
      toggleScreen()
      screen2.querySelector('h2').innerText = `Acertou em ${attempts} ${attempts == 1 ? 'tentativa' : 'tentativas'}`
    } 
  }
  
  attempts++
  inputNumber.value = ''
}

function handleResetClick(e){
  attempts = 1
  randomNum = Math.round(Math.random() * 10)

  toggleScreen()
}

function toggleScreen(){
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')
}

function handleEnterKey(e){
  if(e.key == 'Enter' && screen1.classList.contains('hide')){
    handleResetClick()
  }
}