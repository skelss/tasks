function f(){
    console.log(this.name)
}
  
f = f.bind({name: "Вася"}).bind({name: "Петя"})
  
f()

/*
В консоли выведется Вася. Изменить существующую привязку нельзя.
*/