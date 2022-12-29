//VARIÁVEIS DA APLICAÇÃO
//Capturando dados pois ele é utilizado em mais de uma linha de código
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const btnTry = document.querySelector('#btnTry')
const btnReset = document.querySelector('#btnReset')

//Ou seja assim que a aplicação começar, será criado um número randomico - guardado em memória
let randomNumber = Math.round(Math.random() * 10)

let xAttempts = 1 //attemps (tentantivas) - variável de controle

// EVENTOS
//Adciona o evento e o ouvidor(o caro que vai fazer algo para o evento)
//event = click --- listener = handleTryClick
//Ambos são callback
btnTry.addEventListener('click', handleTryClick) //handleTryClick - passando função como referencia de nome
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', pressKey) //keydown (chave para baixo) ou keypress (pressione o botão)

/*btnReset.addEventListener('click', function () {
  screen1.classList.remove('hide')
  screen2.classList.add('hide')

  xAttempts = 1
})*/

//FUNÇÕES CALLBACK
//Teste - Aqui estamos imprimindo uma mensagem no console toda vez que clicarmos no botão tentar
//função callback (chamar de volta) == função que é chamada como argumento de outra função
//event é um objeto com todos os dados do evento neste caso o clique
function handleTryClick(event) {
  //lidar com clique
  event.preventDefault() //Não faça o padrão deste evento (não envie o formulario) //Um desses dados deste evento de click por ser um botão dentro de um formulario o padrão é fazer um submit deste formulario ou seja enviar é com esta tag ele não irá fazer o submit

  const inputNumber = document.querySelector('#inputNumber') //Ou seja estamos armazenando em uma variável de mesmo nome (que não é obrigatório só está sendo usual neste caso) o input de id inputNumber e utilizamos o seletor css #inputNumber
  // console.log('Cheguei aqui')
  // console.log(inputNumber.value) //.value serve para selecionar o valor do input
  // if (
  //   Number(inputNumber.value) == 0 &&
  //   Number(inputNumber.value) == randomNumber
  // ) {
  //   toggleScreen()
  //   screen2.querySelector('h2').innerText = `acertou em ${xAttempts} tentativas`
  // } else if (
  //   Number(inputNumber.value) == 0 &&
  //   Number(inputNumber.value) != randomNumber
  // ) {
  //   inputNumber.value = ''
  //   xAttempts++
  // } else
  if (inputNumber.value == "") {
    // if (Number(inputNumber) == 0 && Number(inputNumber) != randomNumber) {
    //   inputNumber.value = ''
    //   xAttempts++
    // }
    // if (Number(inputNumber) == 0 && Number(inputNumber) == randomNumber) {
    //   toggleScreen()
    //   screen2.querySelector(
    //     'h2'
    //   ).innerText = `acertou em ${xAttempts} tentativas`
    // } else {
      alert('Ops...Nenhúm número inserido. Tente novamente!')
      // inputNumber.value = ''
    //}
  } else if (
    !(Number(inputNumber.value) >= 0 && Number(inputNumber.value) <= 10)
  ) {
    alert('Número inserido fora do intervalo proposto. Tente novamente!')

    inputNumber.value = ''
  } else if (Number(inputNumber.value) != randomNumber) {
    inputNumber.value = '' //Ou seja toda vez que acionar o clique e tiver que tentar novamente quero que o meu input fique vazio
    // console.log(xAttempts)
    xAttempts++
  } else if (Number(inputNumber.value) == randomNumber) {
    //Ou seja quando for verdadeiro este argumento vamos tirar o hide do screen2 e adcionar no scree1 - para que uma tela se sobreponha a outro
    // document.querySelector('.screen1').classList.add('hide')
    // document.querySelector('.screen2').classList.remove('hide')
    // screen1.classList.add('hide')
    // screen2.classList.remove('hide')
    toggleScreen()

    //Aqui eu seleciono o h2 que está no .screen2 que funciona da mesma forma que no css, seleciono o seu texto com .innerText (texto interno) e reatribuo um valor com template literals com a variável de controle xAttempts
    // document.querySelector(
    //   '.screen2 h2'
    // ).innerText = `acertou em ${xAttempts} tentativas`
    screen2.querySelector('h2').innerText = `acertou em ${xAttempts} tentativas`

    // console.log(`Você acertou em ${xAttempts} tentativas`)
  }
}

function handleResetClick(event) {
  // screen1.classList.remove('hide')
  // screen2.classList.add('hide')
  toggleScreen()

  xAttempts = 1
  randomNumber = Math.round(Math.random() * 10) //Ou seja toda vez que houver um reset ou seja quando está função tiver sido chamada quero que um novo numero randomico seja gerado
}

function pressKey(e) {
  // console.log(e.key) //Para descobrir o nome da tecla que está sendo pressionada
  if (e.key == 'Enter' && screen1.classList.contains('hide')) {
    //Ou seja se key for igual a tecla enter (se a tecla pressionada for igual a enter) && se o screen1 contém a classe hide, pq se o segundo argumento sempre que se clica-se o tenter se trocaria de página (quando o screen1 tiver a classe hide significando que estamos no screen2 ao apertar o enter voltamos para o screen1)
    handleResetClick()
  }
}

function toggleScreen() {
  //.toggle (Se não tiver adciona elemento, se houver retira elemento)

  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')
}
