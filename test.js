function mobileRemote(text) {
  // Ваш код
  let sign_arr = [
    ["1"],
    ["2","a","b","c"],
    ["3","d","e","f"],
    ["4","g","h","i"],
    ["5","j","k","l"],
    ["6","m","n","o"],
    ["7","p","q","r","s"],
    ["8","t","u","v"],
    ["9","w","x","y","z"]
  ]

  let current_coords = [0, 0]
  let register = 0 //caps lock
  let steps = 0
  input_arr = text.split('')

  input_arr.forEach(item => {
    if(isNaN(parseInt(item)) && register!=(item.toString().toUpperCase() === item ? 1 : 0)) {//проверяем сменился ли регистр
      register = item.toString().toUpperCase() === item ? 1 : 0 //если сменился, то меняем флаг
      steps += step_amount(current_coords, [3,4]) + 1 //прибавляем шаги до кнопки смены регистра + само нажатие на кнопку
      current_coords = [3,4] //меняем текущие координаты
    }

    let i = item.toLowerCase()
    let pos_in_arr //иначе говоря порядковый номер кнопки с искомой буквой
    let inner_index //позиция буквы на кнопке
    sign_arr.forEach((item,index) => {//поиск во вложенных массивах
      let inner = item.indexOf(i)
      if(inner >= 0) {pos_in_arr = index; inner_index = inner}
    })
    let target_coords = [pos_in_arr % 3 ,Math.floor(pos_in_arr/3)]
    steps += step_amount(current_coords, target_coords) + 1 + inner_index + 1
  })
  return steps
}

function step_amount(start, end) {
  let steps = 0
  if(start[0] - end[0] != 0) steps++ // по оси х нужная координата всегда достигается 1 шагом, если она уже не достигнута

  if(start[1] - end[1] != 0) { //по оси У если разница по модулю равна 2 то 2 шага, иначе 1 шаг
    if(Math.abs(start[1] - end[1]) != 2) steps++
    else steps = steps + 2
  }

  return Number(steps)
}

console.log(mobileRemote('C')); // 10
console.log(mobileRemote('yandex')); // 34
console.log(mobileRemote('mobileremote')); // 71
