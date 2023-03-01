let fruits = ["Яблоки", "Груша", "Апельсин"];

let shoppingCart = fruits;
shoppingCart.push("Банан");

console.log( fruits.length ); 

/*
В консоли выведется 4 (длина массива). Это происходит потому, что массив по сути
является объектом и новая переменная shoppingCart содержит ссылку на тот же 
массив, что и переменная fruits
*/