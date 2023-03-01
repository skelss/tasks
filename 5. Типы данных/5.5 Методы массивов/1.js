function camelize(str){
    let newStr = str.split('-').map((item, index) => 
        item = index != 0 ? item[0].toUpperCase() + item.slice(1) : item
        ).join('')
    return newStr
}

console.log(camelize("background-color"))
console.log(camelize("list-style-image"))
console.log(camelize("-webkit-transition"))