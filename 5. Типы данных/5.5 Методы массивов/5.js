function copySorted(arr){
    let newArr = arr.slice('').sort()
    return newArr
}

let arr = ["HTML", "JavaScript", "CSS"]
let sorted = copySorted(arr)

console.log(sorted)
console.log(arr)
