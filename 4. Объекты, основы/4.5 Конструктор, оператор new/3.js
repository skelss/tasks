function Accumulator(startingValue){
    this.value = startingValue
    this.read = function(){
        this.value += Number(prompt('Введите новое значение:', 0))
    }
}


let accumulator = new Accumulator(1)

accumulator.read()
accumulator.read()

console.log(accumulator.value)