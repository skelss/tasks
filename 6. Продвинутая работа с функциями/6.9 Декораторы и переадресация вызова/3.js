function debounce(f, ms){
    let diff = 0
    return function(){
        if (diff) return
        f.apply(this, arguments)
        diff = 1
        setTimeout(() => diff = 0, ms)
    }
}

function func(x){
    console.log(x)    
}

let f = debounce(func, 1000)

f(1)
f(2)

setTimeout( () => f(3), 100)
setTimeout( () => f(4), 1100)
setTimeout( () => f(5), 1500)