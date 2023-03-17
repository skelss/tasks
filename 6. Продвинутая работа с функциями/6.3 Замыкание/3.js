let phrase = "Hello";

if (true) {
  let user = "John";

  function sayHi() {
    alert(`${phrase}, ${user}`);
  }
}

sayHi();

/*
В результате выполнения получится ошибка.
Функция sayHi() объявлена внутри блока if(), поэтому доступна только в нем.
Вне этого блока функция недоступна.
*/