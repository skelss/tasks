/*
Да, возможно, в данном примере функции возвращают один и тот же объект, 
поэтому a = b
*/

let example = {
    name: 'Artem'
}

function A(){
    return example
}

function B(){
    return example
}

let a = new A()
let b = new B()

console.log(a == b)