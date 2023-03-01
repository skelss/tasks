function Calculator() {
    this.calculate = function(str){
        let arrOfValues = str.split(' ')
        let a = Number(arrOfValues[0])
        let operator = arrOfValues[1]
        let b = Number(arrOfValues[2])

        if (isNaN(a) || isNaN(b))
            return NaN
        else return this.methods[operator](a, b)
    }
    this.methods = {
        '+': (a, b) => Number((a + b).toFixed(2)),
        '-': (a, b) => Number((a - b).toFixed(2))
    }
    this.addMethod = function(name, func){
        this.methods[name] = func
    }
}


let calc = new Calculator

calc.addMethod('*', (a, b) => a * b)
calc.addMethod('/', (a, b) => a / b)
calc.addMethod('**', (a, b) => a ** b)

console.log(calc.calculate('11.8 + 7'))
console.log(calc.calculate('15.76 - 5.77'))
console.log(calc.calculate('4 * 5.73'))
console.log(calc.calculate('56 / 8.5'))
console.log(calc.calculate('4 ** 3'))
