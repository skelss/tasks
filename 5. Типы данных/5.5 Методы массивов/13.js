function groupById(arr){
    return arr.reduce((result, currentUser) => {
        result[currentUser.id] = currentUser
        return result
    }, {})
}

let users = [
    {id: 'john', name: "John Smith", age: 20},
    {id: 'ann', name: "Ann Smith", age: 24},
    {id: 'pete', name: "Pete Peterson", age: 31}]

console.log(groupById(users))