function topSalary(salaries){
    let topName = null
    let top = 0
    let salaryData = Object.entries(salaries)
    for(let[name, salary] of salaryData){
        if(salary > top){
            top = salary
            topName = name
        }
    }
    return topName
}

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250,
    "Kate": 300
}

console.log(topSalary(salaries))