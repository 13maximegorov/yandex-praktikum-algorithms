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
  let register = 0 // Caps Lock
  let textArray = text.split('')
  let steps = 0

}

console.log(mobileRemote('C'))  // 10
console.log(mobileRemote('yandex'))  // 34
console.log(mobileRemote('mobileremote'))  // 71

