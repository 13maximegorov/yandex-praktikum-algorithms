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

const WIDTH = 3
const HEIGHT = 4

// Функция подсчета количества кликов
function getClicks(currentKey, nextKey) {
  const {x, y} = currentKey // Координаты текущей клавиши
  const {x: nextX, y: nextY, index} = nextKey // Координаты следующей клавиши и индекс выбранного символа

  // Количество кликов между клавишами по горизонтали и вертикали
  const dx = Math.abs(x - nextX)
  const dy = Math.abs(y - nextY)

  return Math.min(dx, WIDTH - dx) + Math.min(dy, HEIGHT - dy) + index + 2
}

const START_KEY = '1'
const CAPS_LOCK_KEY = '*'

function mobileRemote(text) {
  const path = text.split('')

  // Генерация словаря с клавишами
  const keyboardMap = generateKeyboardMap()

  // Флаг, отвечающий за то, включен ли режим CAPS_LOCK
  let isCapsLockMode = false

  // Начало всегда с клавиши 1
  let currentKey = START_KEY
  let clicks = 0

  path.forEach(rawKey => {
    // Преобразование символа в нижний регистр
    const key = rawKey.toLowerCase()

    const inUpperCase = key !== rawKey
    const isLetter = key !== key.toUpperCase()

    if (isLetter && inUpperCase !== isCapsLockMode) {
      clicks += getClicks(keyboardMap[currentKey], keyboardMap[CAPS_LOCK_KEY])
      currentKey = CAPS_LOCK_KEY
      isCapsLockMode = !isCapsLockMode
    }

    // Подсчет количества кликов
    clicks += getClicks(keyboardMap[currentKey], keyboardMap[key])

    // Ставим курсор на новую клавишу
    currentKey = key
  })

  return clicks
}

console.log(mobileRemote('C'))  // 10
console.log(mobileRemote('yandex'))  // 34
console.log(mobileRemote('mobileremote'))  // 71
console.log(mobileRemote('12345')) // 15
console.log(mobileRemote('MobileRemote'))  // 87
