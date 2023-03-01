let calculator = {
    read() {
        this.a = Number(prompt('Введите a:', 0))
        this.b = Number(prompt('Введите b:', 0))
    },
    sum() {
        return this.a + this.b
    },
    mul() {
        return this.a * this.b
    }
}
  
calculator.read()
alert( calculator.sum() )
alert( calculator.mul() )