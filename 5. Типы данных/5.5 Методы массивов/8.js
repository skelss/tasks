function mergeName(users){
    return users.map(element => ({
        fullName: element.name + ' ' + element.surname,
        id: element.id
    }))
}

let vasya = { name: "Вася", surname: "Пупкин", id: 1 }
let petya = { name: "Петя", surname: "Иванов", id: 2 }
let masha = { name: "Маша", surname: "Петрова", id: 3 }

let users = [ vasya, petya, masha ]

console.log(mergeName(users))