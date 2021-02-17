// Клавиатура мобильного телефона в виде массива
const mobileKeyboard = [
  [[1], [2, 'a', 'b', 'c'], [3, 'd', 'e', 'f']],
  [[4, 'g', 'h', 'i'], [5, 'j', 'k', 'l'], [6, 'm', 'n', 'o']],
  [[7, 'p', 'q', 'r', 's'], [8, 't', 'u', 'v'], [9, 'w', 'x', 'y', 'z']],
  [['*'], [0], ['#']]
]

/*
Cловарь, ключами которого являются символы, а значениями — объекты с координатой соответствующей клавиши и порядковым номером (индексом)
символа на клавише

Пример:
const keyboard = {
  '1': {x: 0, y: 0, index: 0},
  '2': {x: 1, y: 0, index: 0},
  'a': {x: 1, y: 0, index: 1},
  'b': {x: 1, y: 0, index: 2},
  'c': {x: 1, y: 0, index: 3},
  '3': {x: 2, y: 0, index: 0},
  'd': {x: 2, y: 0, index: 1},
  ...
}
*/
function generateKeyboardMap() {
  return mobileKeyboard.reduce((acc, item, y) => {
    item.forEach((button, x) => {
      button.forEach((key, index) => {
        acc[key] = {x, y, index}
      })
    })

    return acc
  }, {})
}

function getClicks(currentKey, nextKey) {
  const {x, y} = currentKey // Координаты текущей клавиши
  const {x: nextX, y: nextY, index} = nextKey // Координаты следующей клавиши и индекс выбранного символа

  // Количество кликов между клавишами по горизонтали и вертикали
  const dx = Math.abs(x - nextX)
  const dy = Math.abs(y - nextY)
}
