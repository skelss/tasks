function unique(arr){
    return Array.from(new Set(arr))
  }
  
let strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", ":-O"]

console.log(unique(strings))

/*
function unique2(arr){
    let result = []
    for(let elem of arr){
        if(!result.includes(elem))
            result.push(elem)
    }

    return result
}

console.log(unique2(strings))
*/