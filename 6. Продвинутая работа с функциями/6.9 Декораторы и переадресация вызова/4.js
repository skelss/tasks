function throttle(f, ms){
    let diff = 0
    let currentArgs = null
    let currentThisContext = null

    function wrapper(){
        if (diff){
            currentArgs = arguments
            currentThisContext = this
            return
        }

        f.apply(this, arguments)
        diff = 1

        setTimeout(function(){
            diff = 0
            if (currentArgs){
                wrapper.apply(currentThisContext, currentArgs)
                currentThisContext = null
                currentArgs = null
            }
        }, ms)
    }
    return wrapper
}

function f(x){
    console.log(x)
}
  
let f1000 = throttle(f, 1000)
  
f1000(1) 
f1000(2) 
f1000(3)