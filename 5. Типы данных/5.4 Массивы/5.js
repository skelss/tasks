function getMaxSubSum(arr){
    let currentSum = 0
    let sum = 0
    for(let elem of arr){
        currentSum += elem
        if(currentSum > sum) sum = currentSum
        if (currentSum < 0) currentSum = 0
    }
    return sum
}


//Проверка
let arrays = [
    [-1, 2, 3, -9],
    [2, -1, 2, 3, -9],
    [-1, 2, 3, -9, 11],
    [-2, -1, 1, 2],
    [100, -9, 2, -3, 5],
    [1, 2, 3],
    [-1, -2, -3]
]
for(let elem of arrays){
    console.log(getMaxSubSum(elem))
}