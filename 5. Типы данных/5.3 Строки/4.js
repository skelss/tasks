function extractCurrencyValue(str){
    return Number(str.slice(1))
}

let price = '$300'
console.log(extractCurrencyValue(price))