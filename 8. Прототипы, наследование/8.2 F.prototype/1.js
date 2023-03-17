function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

alert( rabbit.eats ); // true

/*
//////////////////////////////////////////////

function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

Rabbit.prototype = {}; //добавили

alert( rabbit.eats ); // true

/////////////////////////////////////////////

function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

Rabbit.prototype.eats = false; //добавили

alert( rabbit.eats ); // false

//////////////////////////////////////////////

function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

delete rabbit.eats; //добавили

alert( rabbit.eats ); // true

//////////////////////////////////////////////

function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

delete Rabbit.prototype.eats; // добавили

alert( rabbit.eats ); // undefined

*/

