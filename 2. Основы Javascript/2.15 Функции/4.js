function pow(x, n){
    let result = x
    for(let i = 1; i < n; i++)
        result = result * x 
    return result
}
//console.log(pow(2, 4))

//<script>

let x = prompt('Введите x:', '');
let n = prompt('Введите n:', '');

if (n < 1){
  alert('Некорректная степень числа')
}
else{
  alert(pow(x, n))
}

//</script>