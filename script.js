let form = document.querySelector("#form")
let output = document.querySelector("#output")
let before = form[0]
let after = form[1]

// take date now
let timeNow = new Date()
let yearNow = timeNow.getFullYear()
let monthNow = timeNow.getMonth()+1
let dayNow = timeNow.getDate()
let actualDate = `${yearNow}-${twoDigits(monthNow)}-${twoDigits(dayNow)}`

// change always two digits for days and months
function twoDigits(digit) {
    if (digit < 10) {
        return '0' + digit
    } else {
        return digit
    }
}

// when open the page after input start with actual date
after.value = actualDate 
timeBetween()


function timeBetween() {
  // get months and year chosen and change str for number
  let remaingMonthsBefore = 0
  let yearBefore = Number(before.value.substr(0, 4))
  let yearAfter = Number(after.value.substr(0, 4))

  let monthBefore = Number(before.value.substr(5, 2))
  let monthAfter = Number(after.value.substr(5, 2))

  let dayBefore = Number(before.value.substr(8, 2));
  let dayAfter = Number(after.value.substr(8, 2));

  let diferenceYear = yearAfter - yearBefore
  // verify if exits months of passed years
  if (diferenceYear > 0) {
    remaingMonthsBefore = diferenceYear * 12 - monthBefore
  }

  // total remaining months plus months of after date input
  let monthsBetweenDate = remaingMonthsBefore + monthAfter
  output.innerText = `Has ${monthsBetweenDate} months between dates`
}

let btCalculate = document.querySelector("#btCalculate")
btCalculate.addEventListener("click", timeBetween)
