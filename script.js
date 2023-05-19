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
    let yearAfterChosen = Number(after.value.substr(0, 4))
    let yearBeforeChosen = Number(before.value.substr(0, 4))
    let monthAfterChosen = Number(after.value.substr(5, 2))
    let monthBeforeChosen = Number(before.value.substr(5, 2))

    let diferenceYear = yearAfterChosen - yearBeforeChosen
    // verify if exits months of passed years
    if (diferenceYear > 0) {
        remaingMonthsBefore = diferenceYear * 12 - monthBeforeChosen 
    }
    // total remaining months plus months of after date input
    let monthsBetweenDate = remaingMonthsBefore + monthAfterChosen
    output.innerText = `Has ${monthsBetweenDate} months between dates`
}

let btCalculate = document.querySelector("#btCalculate")
btCalculate.addEventListener("click", timeBetween)
