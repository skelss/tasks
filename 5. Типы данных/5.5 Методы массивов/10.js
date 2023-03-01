function shuffle(array){
    return array.sort(() => Math.random() - 0.5)
}

let arr = [1, 2, 3]

for(let i = 0; i < 10; i++){
    console.log(shuffle(arr))
}

/*
Правильное решение

function shuffle(array){
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1))
    [array[i], array[j]] = [array[j], array[i]]
  }
}
*/