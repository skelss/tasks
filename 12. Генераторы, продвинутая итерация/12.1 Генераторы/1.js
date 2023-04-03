function* pseudoRandom(seed){
    let num = seed
    while(1){
        num = num * 16807 % 2147483647
        yield num
    }
}

let generator = pseudoRandom(1)

console.log(generator.next().value)
console.log(generator.next().value)
console.log(generator.next().value)
