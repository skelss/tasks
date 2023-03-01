function highToLow(arr){
    arr.sort(function(a, b) {
        return b - a
    })
}

let arr = [5, 2, 1, -10, 8]
highToLow(arr)
console.log(arr)