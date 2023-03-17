let head = {
    glasses: 1
};
  
let table = {
    pen: 3
};
  
let bed = {
    sheet: 1,
    pillow: 2
};
  
let pockets = {
    money: 2000
};

Object.setPrototypeOf(table, head)
Object.setPrototypeOf(bed, table)
Object.setPrototypeOf(pockets, bed)
//console.log(bed.glasses)

/*
Как быстрее получить значение glasses 
– через pockets.glasses или через head.glasses?

=> вероятно, быстрее через head.glasses (мой ответ)
=> без разницы (правильный ответ)

С точки зрения производительности, для современных движков неважно, откуда 
берётся свойство – из объекта или из прототипа. Они запоминают, где было 
найдено свойство, и повторно используют его в следующем запросе.
*/