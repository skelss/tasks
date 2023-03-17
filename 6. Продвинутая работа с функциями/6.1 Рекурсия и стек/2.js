function factorial(n){
    return n <= 1? 1 : (n * factorial(n - 1))
}

let n = 1
console.log(factorial(n))