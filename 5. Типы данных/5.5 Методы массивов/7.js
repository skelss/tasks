function getNames(users){
    return users.map(item => item.name)
}

let vasya = { name: "Вася", age: 25 }
let petya = { name: "Петя", age: 30 }
let masha = { name: "Маша", age: 28 }

let users = [ vasya, petya, masha ]

console.log(getNames(users))