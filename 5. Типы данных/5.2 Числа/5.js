function random(min, max){
    return Math.random() * (max - min) + min
}

for(let i = 0; i < 10; i++){
    console.log(random(5, 10))
}