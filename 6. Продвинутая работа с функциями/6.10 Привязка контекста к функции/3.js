function sayHi(){
    alert(this.name)
}
sayHi.test = 5
  
let bound = sayHi.bind({
    name: "Вася"
})
  
console.log(bound.test)

/*
В консоли выведется undefined, т.к. bind() возвращает новый объект, у которого
свойства .test уже не будет
*/