function printNumbers1(from, to){
    let timerId = setInterval(() => {
        console.log(from)

        if (from == to) clearInterval(timerId)
        from++
    }, 1000)
}

function printNumbers2(from, to){
    setTimeout(function tick(){
    console.log(from)
    if(from < to) setTimeout(tick, 1000)
    from++
}, 0)
}

let a = 5
let b = 10

//printNumbers1(a, b)
printNumbers2(a, b)
