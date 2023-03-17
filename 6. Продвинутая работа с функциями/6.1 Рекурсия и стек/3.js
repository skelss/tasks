function fib(n){
    let first = 1
    let second = 1
    let sum = 1
    for(let i = 3; i <= n; i++){
        sum = first + second
        first = second
        second = sum
    }
    
    return sum
}

let n = 3
console.log(fib(n))