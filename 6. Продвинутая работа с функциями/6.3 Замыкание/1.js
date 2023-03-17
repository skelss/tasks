function makeCounter() {
  let count = 0;

  return function() {
    return count++;
  };
}

let counter = makeCounter();
let counter2 = makeCounter();

alert( counter() ); // 0
alert( counter() ); // 1

alert( counter2() ); // ?
alert( counter2() ); // ?

/*
Счетчики counter и counter2 независимы, у них собственное лексическое окружение.
counter2() выведет 0, 1
*/