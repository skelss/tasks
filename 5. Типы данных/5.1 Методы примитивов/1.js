let str = "Привет";
str.test = 5;
console.log(str.test);

/*
В консоль выведется undefined.
На 2 строке (str.test = 5;) создается "объект-обертка", и свойство test успешно
добавляется, после чего этот объект сразу же удалится. При попытке обращения
к этому свойству далее в 3 строке, оно уже не будет существовать
*/
