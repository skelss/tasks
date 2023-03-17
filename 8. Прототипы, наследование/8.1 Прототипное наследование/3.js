let animal = {
    eat() {
      this.full = true;
    }
};
  
let rabbit = {
    __proto__: animal
};
  
rabbit.eat();

/*
Cвойство full при вызове rabbit.eat() получит объект rabbit
*/