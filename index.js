function mobileRemote(text) {
  const keyboard = [
    ['1'],
    ['2', 'a', 'b', 'c'],
    ['3', 'd', 'e', 'f'],
    ['4', 'g', 'h', 'i'],
    ['5', 'j', 'k', 'l'],
    ['6', 'm', 'n', 'o'],
    ['7', 'p', 'q', 'r', 's'],
    ['8', 't', 'u', 'v'],
    ['9', 'w', 'x', 'y', 'z'],
  ]

  let currentCoords = [0, 0]
  let register = 0 // CapsLock
  let textArray = text.split('')
  let steps = 0

  textArray.forEach(item => {
    if (isNaN(parseInt(item)) && register !== (item.toString().toUpperCase() === item ? 1 : 0)) {
      register = item.toString().toUpperCase() === item ? 1 : 0 // Если меняется регистр, меняем флаг

      steps += stepAmount(currentCoords, [0, 4]) + 2

      currentCoords = [0, 4]
    }

    let i = item.toLowerCase()
    let positionArray
    let positionLetter

    keyboard.forEach((item, index) => {
      let letter = item.indexOf(i)
      if (letter >= 0) {
        positionArray = index
        positionLetter = letter
      }
    })

    let targetCoords = [positionArray % 3, Math.floor(positionArray / 3)]
    steps += stepAmount(currentCoords, targetCoords) + 1 + positionLetter + 1
  })

  return steps
}

function stepAmount(start, end) {
  let steps = 0

  if (start[0] - end[0] !== 0) {
    steps++
  }

  if (start[1] - end[1] !== 0) {
    if (Math.abs(start[1] - end[1]) !== 2) {
      steps++
    } else {
      steps = steps + 2
    }
  }

  return Number(steps)
}

console.log(mobileRemote('C'))  // 10
console.log(mobileRemote('yandex'))  // 34
console.log(mobileRemote('mobileremote'))  // 71

