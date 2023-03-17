function makeArmy(){
    let shooters = []

    for(let i = 0; i < 10; i++){
        let shooter = function() {
            console.log(i)
        }
    
    shooters.push(shooter)
    }
  
    return shooters
}
  
let army = makeArmy()

army[4]()

/*
При вызове army[4]() мы получаем в ответ функцию shooter(), которая выводит i.
i она берет из внешнего лексического окружения (непосредственно в момент вызова),
поэтому в консоли выводится 10 (значение i при завершении цикла)
Для исправления этого можно заменить текущий цикл на for(){...}
*/