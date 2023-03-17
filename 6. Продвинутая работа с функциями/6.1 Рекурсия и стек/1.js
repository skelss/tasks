function sumToLoop(n){
    let sum = 0

    for(let i = 1; i <= n; i++){
        sum += i
    }
    return sum
}

function sumToRecursion(n){
    return n <= 1 ? n : (n + sumToRecursion(n - 1))
}

function sumToProgression(n){
    return n * (n + 1) / 2
}

let n = 5
console.log(sumToProgression(n))

/*
Самый быстрый вариант решения по формуле арифметической прогрессии, т.к. там
производится всего 3 действия.
Самым медленным является вариант с использованием рекурсии, т.к. помимо операций
сложения в нем тратятся ресурсы на вложенные вызовы 

Посчитать sumTo(100000) при помощи рекурсии вряд ли удастся по причине
переполнения стека вызовов
*/