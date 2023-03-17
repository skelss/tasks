function printListLoop(list){
    let currentList = list
    let arr = []

    while(currentList){
        arr.push(currentList.value)
        currentList = currentList.next
    }
    arr.reverse().map(item => console.log(item))
}

function printListRecursion(list){
    if(list.next) printListRecursion(list.next)
    console.log(list.value)
}


let list = {
    value: 1,
    next: {
           value: 2, 
           next: {
                value: 3, 
                next: {
                    value: 4, 
                    next: null
                }
            }
    }
}

printListLoop(list)
printListRecursion(list)