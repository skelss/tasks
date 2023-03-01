function sumSalaries(salaries){
    let sum = 0
    let values = Object.values(salaries)
    for(pay of values){
        sum += pay
    }
    return sum
}

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
}

console.log(sumSalaries(salaries))
