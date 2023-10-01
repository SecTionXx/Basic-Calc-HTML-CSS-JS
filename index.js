const buttonEl = document.querySelectorAll('button')

const inputFieldEL = document.getElementById('result')

for (let i = 0; i < buttonEl.length; i++) {
  buttonEl[i].addEventListener('click', () => {
    const buttonValue = buttonEl[i].textContent
    if (buttonValue === 'C') {
      clearResult()
    } else if (buttonValue === '=') {
      calculateResult()
    } else {
      appendValue(buttonValue)
    }
  })
}

function clearResult() {
  inputFieldEL.value = ''
}

function calculateResult() {
  inputFieldEL.value = eval(inputFieldEL.value)
}

function appendValue(buttonValue) {
  inputFieldEL.value += buttonValue
  //   inputFieldEL.value = inputFieldEL.value + buttonValue
}
