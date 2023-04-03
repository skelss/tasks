class Animal {

  constructor(name) {
    this.name = name
  }

}

class Rabbit extends Animal {
  constructor(name) {
    //this.name = name
    super(name)
    this.created = Date.now()
  }
}

let rabbit = new Rabbit("Белый кролик") // Error: this is not defined
console.log(rabbit.name)

/*
Конструкутор класса Rabbit должен в этом случае вызвать super(name) 
*/