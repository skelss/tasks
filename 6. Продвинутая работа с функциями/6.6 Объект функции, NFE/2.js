function sum(a){
    let currentSum = a

    function sumValue(b){
        currentSum += b
        return sumValue
    }

    sumValue.result = function() {
        return currentSum
    }
    
    return sumValue
}

console.log(sum(4)(6)(-5).result())
console.log(sum(14)(-6)(7).result())