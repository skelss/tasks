function randomInteger(min, max){
    let result =  Math.random() * (max - min + 1) + min - 0.5
    return Number(result.toFixed(0))
}

for(let i = 0; i < 10; i++){
    console.log(randomInteger(5, 10))
}
