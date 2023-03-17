function printListLoop(list){
    let currentList = list
    while(currentList){
        console.log(currentList.value)
        currentList = currentList.next
    }
}

function printListRecursion(list){
    console.log(list.value)
    if(list.next) printListRecursion(list.next)
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

/*
В цикле не тратятся ресурсы на вложенные вызовы, поэтому данный метод эффективнее
*/