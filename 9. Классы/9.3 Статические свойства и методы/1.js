class Rabbit extends Object {
  constructor(name){
    super() // при наследовании необходимо вызвать конструктор родительского класса
    this.name = name
  }
}

let rabbit = new Rabbit("Кроль")
console.log(rabbit.hasOwnProperty('name'))