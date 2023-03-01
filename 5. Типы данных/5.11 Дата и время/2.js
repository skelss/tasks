function getWeekDay(date){
    let day = date.getDay()
    let nameOfDays = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ']
    return nameOfDays[day]
}

let date = new Date(2012, 0, 3)
let date2 = new Date(2015, 6, 8)
let date3 = new Date(2023, 1, 14)

console.log(getWeekDay(date))
console.log(getWeekDay(date2))
console.log(getWeekDay(date3))