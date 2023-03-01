function makeUser() {
  return {
    name: "John",
    ref: this
  };
}

let user = makeUser();

console.log( user.ref.this ); // Каким будет результат?

/*
В консоли выведется undefined, т.к. в данном случае вызов идет через функцию,
в ref.this записывается this функции makeUser()
*/