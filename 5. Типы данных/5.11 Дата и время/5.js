function getLastDayOfMonth(year, month){
    let day = 0
    let date = new Date(year, month + 1, day)
    return date.getDate()
}

console.log(getLastDayOfMonth(2023, 1))
console.log(getLastDayOfMonth(2022, 2))
console.log(getLastDayOfMonth(2021, 3))
