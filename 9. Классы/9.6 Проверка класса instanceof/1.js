function A() {}
function B() {}

A.prototype = B.prototype = {}

let a = new A()

console.log(a instanceof B) // true

/*
instanceof проверяет на совпадения prototype, а не саму функцию.
A.prototype = B.prototype = {}
*/