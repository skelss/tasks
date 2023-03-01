function getLocalDay(date){
    let day = date.getDay()
    return day == 0 ? 7 : day
}

let date = new Date(2012, 0, 3)
let date2 = new Date(2015, 6, 8)
let date3 = new Date(2023, 1, 14)

console.log(getLocalDay(date))
console.log(getLocalDay(date2))
console.log(getLocalDay(date3))