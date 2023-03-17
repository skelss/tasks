function delay(f, ms){
    return function(...arguments){
        setTimeout(()=> f(...arguments), ms)
    }
}

function f(x){
    console.log(x)    
}

let f1000 = delay(f, 1000)
let f3000 = delay(f, 3000)

f1000('test')
f3000('test')

