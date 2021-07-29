var expression = []
var exprResult
var newExpr = []
function result() {
  document.getElementsByClassName('expr')[0].innerHTML = exprResult
  document.getElementsByClassName('expr')[1].innerHTML = ''
  expression = []
}
function getAction(objButton) {
  let action = objButton.value
  let lastSym = expression[expression.length - 1]
  if (
    (action == '+' ||
      action == '-' ||
      action == '×' ||
      action == '÷' ||
      action == '/' ||
      action == '*') &&
    (lastSym == '+' ||
      lastSym == '-' ||
      lastSym == '×' ||
      lastSym == '÷' ||
      lastSym == '/' ||
      lastSym == '*')
  ) {
    expression.pop()
    lastSym = action
  }
  console.log(typeof expression)
  expression.push(action)

  if (expression[0] == '+' || expression[0] == '×' || expression[0] == '÷') {
    expression = []
  }
  let bar = expression
  document.getElementsByClassName('expr')[0].innerHTML = expression.join('')
  bar.forEach((elem, index) => {
    elem === '×' ? (bar[index] = '*') : elem
    elem === '÷' ? (bar[index] = '/') : elem
  })
  console.log(expression)
  exprResult = math.evaluate(bar.join(''))
  document.getElementsByClassName('expr')[1].innerHTML = exprResult
}

function clr() {
  expression = []
  document.getElementsByClassName('expr')[0].innerHTML = '...'
}
function clrLast() {
  expression.pop()
  document.getElementsByClassName('expr')[0].innerHTML = expression.join('')
}
