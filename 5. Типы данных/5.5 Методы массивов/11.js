function getAverageAge(users){
    let sumOfAges = users.reduce((sum, current) => sum + current.age, 0)
    return sumOfAges / users.length
}

let vasya = { name: "Вася", age: 25 }
let petya = { name: "Петя", age: 30 }
let masha = { name: "Маша", age: 29 }

let arr = [ vasya, petya, masha ]

console.log(getAverageAge(arr))